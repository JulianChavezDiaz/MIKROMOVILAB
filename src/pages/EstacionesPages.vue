<template>
  <div class="p-4 sm:p-8 bg-gray-100 min-h-screen w-full">
    <div class="bg-gray-800 text-white p-4 rounded-t-lg">
      <h1 class="text-lg sm:text-xl">Gestor Estaciones</h1>
    </div>
    <div class="p-4 bg-white rounded-b-lg shadow-md">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
        <button @click="abrirModalNuevo" class="bg-green-500 text-white px-4 py-2 rounded mb-2 sm:mb-0">Nueva Estación +</button>
        <input
          v-model="terminoBusqueda"
          @input="buscarEstaciones"
          type="text"
          placeholder="Buscar..."
          class="border rounded px-4 py-2 w-full sm:w-auto"
        />
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b">Id Estación</th>
              <th class="py-2 px-4 border-b">Nombre</th>
              <th class="py-2 px-4 border-b">Ubicación</th>
              <th class="py-2 px-4 border-b">Capacidad</th>
              <th class="py-2 px-4 border-b">Estado</th>
              <th class="py-2 px-4 border-b">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estacion, index) in estacionesPaginadas" :key="index">
              <td class="py-2 px-4 border-b">{{ estacion.id }}</td>
              <td class="py-2 px-4 border-b">{{ estacion.nombre }}</td>
              <td class="py-2 px-4 border-b">{{ estacion.ubicacion }}</td>
              <td class="py-2 px-4 border-b">{{ estacion.capacidad }}</td>
              <td class="py-2 px-4 border-b">{{ estacion.estado }}</td>
              <td class="py-2 px-4 border-b">
                <button @click="abrirModalEditar(estacion, index)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">✏️</button>
                <button @click="eliminarEstacion(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="totalPages > 1" class="mt-4 flex justify-center sm:justify-end">
        <button @click="paginaActual--" :disabled="paginaActual === 1" class="px-3 py-1 border rounded bg-gray-200 mx-1">‹</button>
        <button v-for="page in totalPages" :key="page" @click="paginaActual = page" :class="['px-3 py-1 border rounded mx-1', {'bg-blue-500 text-white': paginaActual === page, 'bg-gray-200': paginaActual !== page}]">{{ page }}</button>
        <button @click="paginaActual++" :disabled="paginaActual === totalPages" class="px-3 py-1 border rounded bg-gray-200 mx-1">›</button>
      </div>

      <!-- Modal para editar estación -->
      <div v-if="showModalEditar" class="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl">
          <h2 class="text-2xl font-bold text-center text-white mb-6">Editar Estación</h2>
          <form @submit.prevent="editarEstacion">
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label for="nombre" class="block text-white mb-2 text-left">Nombre Estación</label>
                <input v-model="estacionActual.nombre" id="nombre" type="text" class="w-full px-3 py-2 rounded bg-gray-200 text-gray-800" placeholder="Nombre Estación"> 
              </div>
              <div>
                <label for="ubicacion" class="block text-white mb-2 text-left">Ubicación</label>
                <input v-model="estacionActual.ubicacion" id="ubicacion" type="text" class="w-full px-3 py-2 rounded bg-gray-200 text-gray-800" placeholder="Dirección">
              </div>
              <div>
                <label for="capacidad" class="block text-white mb-2 text-left">Capacidad</label>
                <input v-model="estacionActual.capacidad" id="capacidad" type="number" class="w-full px-3 py-2 rounded bg-gray-200 text-gray-800" placeholder="Cantidad">
              </div>
              <div>
                <label for="estado" class="block text-white mb-2 text-left">Estado</label>
                <select v-model="estacionActual.estado" id="estado" class="w-full px-3 py-2 rounded bg-gray-200 text-gray-800">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModalEditar" type="button" class="bg-red-600 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Modal para crear nueva estación -->
      <div v-if="showModalNuevo" class="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl bg-imagen">
          <h2 class="text-2xl font-bold text-center text-white mb-6">Nueva Estación</h2>
          <form @submit.prevent="agregarEstacion">
            <div class="grid grid-cols-1 gap-4 mb-4">
              <div>
                <label for="nombreNuevo" class="block text-white mb-2 text-left">Nombre Estación</label>
                <input v-model="nuevaEstacion.nombre" id="nombreNuevo" type="text" class="w-full px-3 py-2 rounded bg-white text-gray-800" placeholder="Nombre Estación">
              </div>
              <div>
                <label for="ubicacionNuevo" class="block text-white mb-2 text-left">Ubicación</label>
                <input v-model="nuevaEstacion.ubicacion" id="ubicacionNuevo" type="text" class="w-full px-3 py-2 rounded bg-white text-gray-800" placeholder="Dirección">
              </div>
              <div>
                <label for="capacidadNuevo" class="block text-white mb-2 text-left">Capacidad</label>
                <input v-model="nuevaEstacion.capacidad" id="capacidadNuevo" type="number" class="w-full px-3 py-2 rounded bg-white text-gray-800" placeholder="Cantidad">
              </div>
              <div>
                <label for="estadoNuevo" class="block text-white mb-2 text-left">Estado</label>
                <select v-model="nuevaEstacion.estado" id="estadoNuevo" class="w-full px-3 py-2 rounded bg-white text-gray-800" >
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModalNuevo" type="button" class="bg-red-600 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
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
      estaciones: [
        { id: 1, nombre: 'Estación 1', ubicacion: 'Centro', capacidad: 10, estado: 'Activo' },
        { id: 2, nombre: 'Estación 2', ubicacion: 'Norte', capacidad: 15, estado: 'Inactivo' },
        // Otros estaciones
      ],
      nuevaEstacionId: 3,
      showModalEditar: false,
      showModalNuevo: false,
      estacionActual: {
        id: '',
        nombre: '',
        ubicacion: '',
        capacidad: '',
        estado: 'Activo',
      },
      nuevaEstacion: {
        nombre: '',
        ubicacion: '',
        capacidad: '',
        estado: 'Activo',
      },
      indexEditar: null,
      paginaActual: 1,
      itemsPorPagina: 5,
      terminoBusqueda: '',
      estacionesFiltradas: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.estacionesFiltradas.length / this.itemsPorPagina);
    },
    estacionesPaginadas() {
      const start = (this.paginaActual - 1) * this.itemsPorPagina;
      const end = start + this.itemsPorPagina;
      return this.estacionesFiltradas.slice(start, end);
    },
  },
  methods: {
    abrirModalNuevo() {
      this.showModalNuevo = true;
    },
    cerrarModalNuevo() {
      this.showModalNuevo = false;
      this.nuevaEstacion = {
        nombre: '',
        ubicacion: '',
        capacidad: '',
        estado: 'Activo',
      };
    },
    agregarEstacion() {
      this.estaciones.push({
        id: this.nuevaEstacionId++,
        nombre: this.nuevaEstacion.nombre,
        ubicacion: this.nuevaEstacion.ubicacion,
        capacidad: this.nuevaEstacion.capacidad,
        estado: this.nuevaEstacion.estado,
      });
      this.cerrarModalNuevo();
      this.filtrarEstaciones();
    },
    abrirModalEditar(estacion, index) {
      this.showModalEditar = true;
      this.indexEditar = index;
      this.estacionActual = { ...estacion };
    },
    cerrarModalEditar() {
      this.showModalEditar = false;
      this.estacionActual = {
        id: '',
        nombre: '',
        ubicacion: '',
        capacidad: '',
        estado: 'Activo',
      };
    },
    editarEstacion() {
      this.$set(this.estaciones, this.indexEditar, { ...this.estacionActual });
      this.cerrarModalEditar();
      this.filtrarEstaciones();
    },
    eliminarEstacion(index) {
      this.estaciones.splice(index, 1);
      this.filtrarEstaciones();
    },
    buscarEstaciones() {
      this.filtrarEstaciones();
    },
    filtrarEstaciones() {
      const termino = this.terminoBusqueda.trim().toLowerCase();
      if (termino === '') {
        this.estacionesFiltradas = this.estaciones;
      } else {
        this.estacionesFiltradas = this.estaciones.filter(estacion =>
          estacion.nombre.toLowerCase().includes(termino) ||
          estacion.ubicacion.toLowerCase().includes(termino)
        );
      }
      this.paginaActual = 1;
    },
  },
  mounted() {
    this.filtrarEstaciones();
  },
};
</script>

<style scoped>
.bg-image {
  background-image: url('@/assets/fondo.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}
.bg-opacity-75 {
  background-color: rgba(241, 241, 241, 0.278);
}
</style>
