<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <div class="bg-gray-800 text-white p-4 rounded-t-lg">
      <h1 class="text-xl">Gestor Alquiler</h1>
    </div>
    <div class="p-4 bg-white rounded-b-lg shadow-md">
      <div class="flex justify-between items-center mb-4">
        <button @click="abrirModalNuevo" class="bg-green-500 text-white px-4 py-2 rounded">Nuevo Alquiler +</button>
        <input
          v-model="terminoBusqueda"
          @input="buscarAlquileres"
          type="text"
          placeholder="Buscar..."
          class="border rounded px-4 py-2"
        />
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b">Id Alquiler</th>
              <th class="py-2 px-4 border-b">Id Usuario</th>
              <th class="py-2 px-4 border-b">Id Bicicleta</th>
              <th class="py-2 px-4 border-b">Id Estación</th>
              <th class="py-2 px-4 border-b">Alquiler Inicio</th>
              <th class="py-2 px-4 border-b">Alquiler Fin</th>
              <th class="py-2 px-4 border-b">Estado</th>
              <th class="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(alquiler, index) in alquileresPaginados" :key="index">
              <td class="py-2 px-4 border-b">{{ alquiler.idAlquiler }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.idUsuario }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.idBicicleta }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.idEstacion }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.alquilerInicio }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.alquilerFin }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.estado }}</td>
              <td class="py-2 px-4 border-b">
                <button @click="abrirModalEditar(alquiler, index)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">✏️</button>
                <button @click="eliminarAlquiler(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
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
      <!-- Modal para editar alquiler -->
      <div v-if="showModalEditar" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded shadow-lg">
          <h2 class="text-xl mb-4">Editar Alquiler</h2>
          <form @submit.prevent="editarAlquiler">
            <div class="mb-2">
              <label for="idUsuario" class="block">Id Usuario</label>
              <input v-model="alquilerActual.idUsuario" id="idUsuario" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idBicicleta" class="block">Id Bicicleta</label>
              <input v-model="alquilerActual.idBicicleta" id="idBicicleta" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idEstacion" class="block">Id Estación</label>
              <input v-model="alquilerActual.idEstacion" id="idEstacion" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="alquilerInicio" class="block">Alquiler Inicio</label>
              <input v-model="alquilerActual.alquilerInicio" id="alquilerInicio" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="alquilerFin" class="block">Alquiler Fin</label>
              <input v-model="alquilerActual.alquilerFin" id="alquilerFin" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estado" class="block">Estado</label>
              <select v-model="alquilerActual.estado" id="estado" class="border rounded w-full py-1 px-2">
                <option>Terminado</option>
                <option>En Proceso</option>
              </select>
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModal" type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      </div>
      <!-- Modal para crear nuevo alquiler -->
      <div v-if="showModalNuevo" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded shadow-lg">
          <h2 class="text-xl mb-4">Nuevo Alquiler</h2>
          <form @submit.prevent="agregarAlquiler">
            <div class="mb-2">
              <label for="idUsuarioNuevo" class="block">Id Usuario</label>
              <input v-model="nuevoAlquiler.idUsuario" id="idUsuarioNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idBicicletaNuevo" class="block">Id Bicicleta</label>
              <input v-model="nuevoAlquiler.idBicicleta" id="idBicicletaNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idEstacionNuevo" class="block">Id Estación</label>
              <input v-model="nuevoAlquiler.idEstacion" id="idEstacionNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="alquilerInicioNuevo" class="block">Alquiler Inicio</label>
              <input v-model="nuevoAlquiler.alquilerInicio" id="alquilerInicioNuevo" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="alquilerFinNuevo" class="block">Alquiler Fin</label>
              <input v-model="nuevoAlquiler.alquilerFin" id="alquilerFinNuevo" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estadoNuevo" class="block">Estado</label>
              <select v-model="nuevoAlquiler.estado" id="estadoNuevo" class="border rounded w-full py-1 px-2">
                <option>Terminado</option>
                <option>En Proceso</option>
              </select>
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModalNuevo" type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
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
      alquileres: [
        { idAlquiler: 1, idUsuario: 'U001', idBicicleta: 'B001', idEstacion: 'E001', alquilerInicio: '2023-07-15', alquilerFin: '2023-07-16', estado: 'Terminado' },
        { idAlquiler: 2, idUsuario: 'U002', idBicicleta: 'B002', idEstacion: 'E002', alquilerInicio: '2023-07-16', alquilerFin: '2023-07-17', estado: 'En Proceso' },
        // Otros alquileres
      ],
      nuevaAlquilerId: 3,
      showModalEditar: false,
      showModalNuevo: false,
      alquilerActual: {
        idAlquiler: null,
        idUsuario: '',
        idBicicleta: '',
        idEstacion: '',
        alquilerInicio: '',
        alquilerFin: '',
        estado: ''
      },
      nuevoAlquiler: {
        idUsuario: '',
        idBicicleta: '',
        idEstacion: '',
        alquilerInicio: '',
        alquilerFin: '',
        estado: 'En Proceso'
      },
      alquilerIndex: null,
      paginaActual: 1,
      elementosPorPagina: 10,
      terminoBusqueda: '',
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filtrarAlquileres().length / this.elementosPorPagina);
    },
    alquileresPaginados() {
      const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
      const fin = inicio + this.elementosPorPagina;
      return this.filtrarAlquileres().slice(inicio, fin);
    }
  },
  methods: {
    abrirModalNuevo() {
      this.showModalNuevo = true;
    },
    cerrarModalNuevo() {
      this.showModalNuevo = false;
    },
    agregarAlquiler() {
      const nuevoAlquiler = {
        idAlquiler: this.nuevaAlquilerId++,
        ...this.nuevoAlquiler
      };
      this.alquileres.push(nuevoAlquiler);
      this.nuevoAlquiler = {
        idUsuario: '',
        idBicicleta: '',
        idEstacion: '',
        alquilerInicio: '',
        alquilerFin: '',
        estado: 'En Proceso'
      };
      this.cerrarModalNuevo();
    },
    abrirModalEditar(alquiler, index) {
      this.alquilerActual = { ...alquiler };
      this.alquilerIndex = index + (this.paginaActual - 1) * this.elementosPorPagina;
      this.showModalEditar = true;
    },
    cerrarModal() {
      this.showModalEditar = false;
    },
    editarAlquiler() {
      this.alquileres[this.alquilerIndex] = { ...this.alquilerActual };
      this.cerrarModal();
    },
    eliminarAlquiler(index) {
      const actualIndex = index + (this.paginaActual - 1) * this.elementosPorPagina;
      this.alquileres.splice(actualIndex, 1);
      if (this.alquileresPaginados.length === 0 && this.paginaActual > 1) {
        this.paginaActual--;
      }
    },
    buscarAlquileres() {
      this.paginaActual = 1;
    },
    filtrarAlquileres() {
      if (this.terminoBusqueda === '') {
        return this.alquileres;
      }
      const termino = this.terminoBusqueda.toLowerCase();
      return this.alquileres.filter(alquiler => 
        alquiler.idUsuario.toLowerCase().includes(termino) ||
        alquiler.idBicicleta.toLowerCase().includes(termino) ||
        alquiler.idEstacion.toLowerCase().includes(termino) ||
        alquiler.estado.toLowerCase().includes(termino)
      );
    }
  }
}
</script>

<style scoped>
</style>
