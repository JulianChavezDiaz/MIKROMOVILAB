<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Gestor Viajes</h1>
      <button @click="nuevoViaje" class="bg-green-500 text-white px-4 py-2 rounded">Nuevo viaje +</button>
    </div>
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="terminoBusqueda"
        @input="buscarViajes"
        type="text"
        placeholder="Buscar..."
        class="border rounded px-4 py-2"
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
          <tr v-for="(viaje, index) in viajesFiltrados" :key="viaje.id">
            <td class="py-2 px-4 border-b">{{ index + 1 }}</td>
            <td class="py-2 px-4 border-b">{{ viaje.id }}</td>
            <td class="py-2 px-4 border-b">{{ obtenerNombreUsuario(viaje.idUsuario) }}</td>
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
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <h2 class="text-xl mb-4">{{ viajeIndex === null ? 'Nuevo Viaje' : 'Editar Viaje' }}</h2>
        <form @submit.prevent="editarViaje">
          <div class="mb-2">
            <label for="idUsuario" class="block">Usuario</label>
            <input v-model="viajeActual.idUsuario" id="idUsuario" type="number" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="estacionInicio" class="block">Estación Inicio</label>
            <input v-model="viajeActual.estacionInicio" id="estacionInicio" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="estado" class="block">Estado</label>
            <select v-model="viajeActual.estado" id="estado" class="border rounded w-full py-1 px-2">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>
          <div class="mb-2">
            <label for="idBicicleta" class="block">ID Bicicleta</label>
            <input v-model="viajeActual.idBicicleta" id="idBicicleta" type="number" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="horaInicio" class="block">Hora Inicio</label>
            <input v-model="viajeActual.horaInicio" id="horaInicio" type="datetime-local" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="horaFin" class="block">Hora Fin</label>
            <input v-model="viajeActual.horaFin" id="horaFin" type="datetime-local" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="tiempoTotal" class="block">Tiempo Total</label>
            <input v-model="viajeActual.tiempoTotal" id="tiempoTotal" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="estacionFin" class="block">Estación Fin</label>
            <input v-model="viajeActual.estacionFin" id="estacionFin" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="flex justify-end">
            <button @click="cerrarModal" type="button" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viajes: [
        { id: 1, idUsuario: 1, estacionInicio: 'Carolina', estado: 'Norte', idBicicleta: 20, horaInicio: '2023-01-01T10:00', horaFin: '2023-01-01T11:00', tiempoTotal: '1h', estacionFin: 'Sur' },
        { id: 2, idUsuario: 2, estacionInicio: 'Parque', estado: 'Centro', idBicicleta: 21, horaInicio: '2023-01-01T12:00', horaFin: '2023-01-01T13:00', tiempoTotal: '1h', estacionFin: 'Oeste' },
      ],
      usuarios: [
        { id: 1, nombre: 'Juan Pérez' },
        { id: 2, nombre: 'Ana López' }
      ],
      showModal: false,
      viajeActual: {
        idUsuario: null,
        estacionInicio: '',
        estado: '',
        idBicicleta: null,
        horaInicio: '',
        horaFin: '',
        tiempoTotal: '',
        estacionFin: ''
      },
      viajeIndex: null,
      terminoBusqueda: '',
      nuevaViajeId: 3
    }
  },
  computed: {
    viajesFiltrados() {
      if (!this.terminoBusqueda) return this.viajes;
      return this.viajes.filter(viaje => {
        const usuario = this.obtenerNombreUsuario(viaje.idUsuario).toLowerCase();
        return usuario.includes(this.terminoBusqueda.toLowerCase());
      });
    }
  },
  methods: {
    obtenerNombreUsuario(idUsuario) {
      const usuario = this.usuarios.find(user => user.id === idUsuario);
      return usuario ? usuario.nombre : 'Desconocido';
    },
    buscarViajes() {
      this.viajesFiltrados();
    },
    nuevoViaje() {
      this.viajeActual = {
        idUsuario: null,
        estacionInicio: '',
        estado: '',
        idBicicleta: null,
        horaInicio: '',
        horaFin: '',
        tiempoTotal: '',
        estacionFin: ''
      };
      this.showModal = true;
      this.viajeIndex = null;
    },
    abrirModalEditar(viaje, index) {
      this.viajeActual = { ...viaje };
      this.showModal = true;
      this.viajeIndex = index;
    },
    cerrarModal() {
      this.showModal = false;
    },
    editarViaje() {
      if (this.viajeIndex !== null) {
        this.viajes.splice(this.viajeIndex, 1, { ...this.viajeActual });
      } else {
        this.viajes.push({ ...this.viajeActual, id: this.nuevaViajeId++ });
      }
      this.cerrarModal();
    },
    eliminarViaje(index) {
      this.viajes.splice(index, 1);
    }
  }
}
</script>

<style scoped>
.table-fixed {
  table-layout: fixed;
  width: 100%;
}
</style>
