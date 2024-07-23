<template>
  <div class="p-8 bg-gray-100 min-h-screen w-full">
    <div class="bg-gray-800 text-white p-4 rounded-t-lg">
      <h1 class="text-xl">Gestor Viajes</h1>
    </div>

    <div class="p-4 bg-white rounded-b-lg shadow-md">
      <div class="flex flex-col md:flex-row justify-between items-center mb-4">
        <button @click="abrirModalNuevo" class="bg-green-500 text-white px-4 py-2 rounded mb-2 md:mb-0">Nuevo viaje +</button>
        <input
          v-model="terminoBusqueda"
          @input="buscarViajes"
          type="text"
          placeholder="Buscar..."
          class="border rounded px-4 py-2 w-full md:w-auto"
        />
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b">Nro</th>
              <th class="py-2 px-4 border-b">ID Viaje</th>
              <th class="py-2 px-4 border-b">Usuario</th>
              <th class="py-2 px-4 border-b">Estación Inicio</th>
              <th class="py-2 px-4 border-b">Estado</th>
              <th class="py-2 px-4 border-b">Id Bicicleta</th>
              <th class="py-2 px-4 border-b">Hora inicio</th>
              <th class="py-2 px-4 border-b">Hora Fin</th>
              <th class="py-2 px-4 border-b">Tiempo Total</th>
              <th class="py-2 px-4 border-b">Estación Fin</th>
              <th class="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(viaje, index) in viajesPaginados" :key="index">
              <td class="py-2 px-4 border-b">{{ index + 1 + (paginaActual - 1) * elementosPorPagina }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.idViaje }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.usuario }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.estacionInicio }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.estado }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.idBicicleta }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.horaInicio }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.horaFin }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.tiempoTotal }}</td>
              <td class="py-2 px-4 border-b">{{ viaje.estacionFin }}</td>
              <td class="py-2 px-4 border-b">
                <button @click="abrirModalEditar(viaje, index)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">✏️</button>
                <button @click="eliminarViaje(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="totalPages > 1" class="mt-4 flex justify-end">
        <button @click="paginaActual--" :disabled="paginaActual === 1" class="px-3 py-1 border rounded bg-gray-200 mx-1">‹</button>
        <button v-for="page in totalPages" :key="page" @click="paginaActual = page" :class="['px-3 py-1 border rounded mx-1', {'bg-blue-500 text-white': paginaActual === page, 'bg-gray-200': paginaActual !== page}]">{{ page }}</button>
        <button @click="paginaActual++" :disabled="paginaActual === totalPages" class="px-3 py-1 border rounded bg-gray-200 mx-1">›</button>
      </div>
      <!-- Modal para editar viaje -->
      <div v-if="showModalEditar" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-gray-800 p-4 rounded shadow-lg w-full max-w-md">
          <h2 class="text-xl mb-4 text-white">Editar Viaje</h2>
          <form @submit.prevent="editarViaje">
            <div class="mb-2">
              <label for="usuario" class="block text-white">Usuario</label>
              <input v-model="viajeActual.usuario" id="usuario" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estacionInicio" class="block text-white">Estación Inicio</label>
              <input v-model="viajeActual.estacionInicio" id="estacionInicio" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estado" class="block text-white">Estado</label>
              <select v-model="viajeActual.estado" id="estado" class="border rounded w-full py-1 px-2">
                <option>Terminado</option>
                <option>En Proceso</option>
              </select>
            </div>
            <div class="mb-2">
              <label for="idBicicleta" class="block text-white">Id Bicicleta</label>
              <input v-model="viajeActual.idBicicleta" id="idBicicleta" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="horaInicio" class="block text-white">Hora Inicio</label>
              <input v-model="viajeActual.horaInicio" id="horaInicio" type="datetime-local" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="horaFin" class="block text-white">Hora Fin</label>
              <input v-model="viajeActual.horaFin" id="horaFin" type="datetime-local" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estacionFin" class="block text-white">Estación Fin</label>
              <input v-model="viajeActual.estacionFin" id="estacionFin" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModal" type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      </div>
      <!-- Modal para crear nuevo viaje -->
      <div v-if="showModalNuevo" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-grey-800 p-4 rounded shadow-lg w-full max-w-md">
          <h2 class="text-xl mb-4 text-white">Nuevo Viaje</h2>
          <form @submit.prevent="agregarViaje">
            <div class="mb-2">
              <label for="usuarioNuevo" class="block text-white">Usuario</label>
              <input v-model="nuevoViaje.usuario" id="usuarioNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estacionInicioNuevo" class="block text-white">Estación Inicio</label>
              <input v-model="nuevoViaje.estacionInicio" id="estacionInicioNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estadoNuevo" class="block text-white">Estado</label>
              <select v-model="nuevoViaje.estado" id="estadoNuevo" class="border rounded w-full py-1 px-2">
                <option>Terminado</option>
                <option>En Proceso</option>
              </select>
            </div>
            <div class="mb-2">
              <label for="idBicicletaNuevo" class="block text-white">Id Bicicleta</label>
              <input v-model="nuevoViaje.idBicicleta" id="idBicicletaNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="horaInicioNuevo" class="block text-white">Hora Inicio</label>
              <input v-model="nuevoViaje.horaInicio" id="horaInicioNuevo" type="datetime-local" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="horaFinNuevo" class="block text-white">Hora Fin</label>
              <input v-model="nuevoViaje.horaFin" id="horaFinNuevo" type="datetime-local" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estacionFinNuevo" class="block text-white">Estación Fin</label>
              <input v-model="nuevoViaje.estacionFin" id="estacionFinNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModal" type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viajes: [
        // Ejemplo de datos iniciales
        {
          idViaje: 1,
          usuario: 'Juan Perez',
          estacionInicio: 'Estación 1',
          estado: 'Terminado',
          idBicicleta: 'Bici001',
          horaInicio: '2023-07-21T08:00',
          horaFin: '2023-07-21T09:00',
          tiempoTotal: '1 hora',
          estacionFin: 'Estación 2',
        },
        // Agrega más viajes según sea necesario
      ],
      paginaActual: 1,
      elementosPorPagina: 10,
      terminoBusqueda: '',
      showModalEditar: false,
      showModalNuevo: false,
      viajeActual: null,
      indexActual: null,
      nuevoViaje: {
        idViaje: '',
        usuario: '',
        estacionInicio: '',
        estado: '',
        idBicicleta: '',
        horaInicio: '',
        horaFin: '',
        tiempoTotal: '',
        estacionFin: '',
      },
    };
  },
  computed: {
    viajesPaginados() {
      let viajesFiltrados = this.viajes.filter((viaje) =>
        Object.values(viaje).some((valor) =>
          valor.toString().toLowerCase().includes(this.terminoBusqueda.toLowerCase())
        )
      );
      let inicio = (this.paginaActual - 1) * this.elementosPorPagina;
      return viajesFiltrados.slice(inicio, inicio + this.elementosPorPagina);
    },
    totalPages() {
      return Math.ceil(this.viajes.length / this.elementosPorPagina);
    },
  },
  methods: {
    abrirModalEditar(viaje, index) {
      this.viajeActual = { ...viaje };
      this.indexActual = index;
      this.showModalEditar = true;
    },
    cerrarModal() {
      this.showModalEditar = false;
      this.showModalNuevo = false;
    },
    editarViaje() {
      this.$set(this.viajes, this.indexActual, this.viajeActual);
      this.cerrarModal();
    },
    abrirModalNuevo() {
      this.nuevoViaje = {
        idViaje: '',
        usuario: '',
        estacionInicio: '',
        estado: '',
        idBicicleta: '',
        horaInicio: '',
        horaFin: '',
        tiempoTotal: '',
        estacionFin: '',
      };
      this.showModalNuevo = true;
    },
    agregarViaje() {
      this.viajes.push({ ...this.nuevoViaje, idViaje: this.viajes.length + 1 });
      this.cerrarModal();
    },
    eliminarViaje(index) {
      this.viajes.splice(index, 1);
    },
    buscarViajes() {
      this.paginaActual = 1; // Reiniciar a la primera página al buscar
    },
  },
};
</script>

<style>
/* Aquí puedes agregar estilos personalizados si es necesario */
</style>
