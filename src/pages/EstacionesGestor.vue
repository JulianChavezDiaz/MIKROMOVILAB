<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Gestor Estaciones</h1>
      <button @click="nuevaEstacion" class="bg-green-500 text-white px-4 py-2 rounded">Nuevo Estaciones +</button>
    </div>
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="terminoBusqueda"
        @input="buscarEstaciones"
        type="text"
        placeholder="Buscar..."
        class="border rounded px-4 py-2"
      />
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100">
            <th class="py-2 px-4 border-b">Id Estación</th>
            <th class="py-2 px-4 border-b">Nombre</th>
            <th class="py-2 px-4 border-b">Ubicacion</th>
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
    <div v-if="totalPages > 1" class="mt-4 flex justify-end">
      <button @click="paginaActual--" :disabled="paginaActual === 1" class="px-3 py-1 border rounded bg-gray-200 mx-1">‹</button>
      <button v-for="page in totalPages" :key="page" @click="paginaActual = page" :class="['px-3 py-1 border rounded mx-1', {'bg-blue-500 text-white': paginaActual === page, 'bg-gray-200': paginaActual !== page}]">{{ page }}</button>
      <button @click="paginaActual++" :disabled="paginaActual === totalPages" class="px-3 py-1 border rounded bg-gray-200 mx-1">›</button>
    </div>

   
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded shadow-lg">
        <h2 class="text-xl mb-4">Editar Estación</h2>
        <form @submit.prevent="editarEstacion">
          <div class="mb-2">
            <label for="nombre" class="block">Nombre</label>
            <input v-model="estacionActual.nombre" id="nombre" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="ubicacion" class="block">Ubicacion</label>
            <input v-model="estacionActual.ubicacion" id="ubicacion" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="capacidad" class="block">Capacidad</label>
            <input v-model="estacionActual.capacidad" id="capacidad" type="number" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="estado" class="block">Estado</label>
            <select v-model="estacionActual.estado" id="estado" class="border rounded w-full py-1 px-2">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
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
      estaciones: [
        { id: 10, nombre: 'Carolina', ubicacion: 'Norte', capacidad: 20, estado: 'Inactivo' },
       
      ],
      nuevaEstacionId: 11, 
      showModal: false,
      estacionActual: {
        id: null,
        nombre: '',
        ubicacion: '',
        capacidad: null,
        estado: ''
      },
      estacionIndex: null,
      paginaActual: 1,
      elementosPorPagina: 10,
      terminoBusqueda: '',
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filtrarEstaciones().length / this.elementosPorPagina);
    },
    estacionesPaginadas() {
      const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
      const fin = inicio + this.elementosPorPagina;
      return this.filtrarEstaciones().slice(inicio, fin);
    }
  },
  methods: {
    nuevaEstacion() {
      const nuevaEstacion = {
        id: this.nuevaEstacionId,
        nombre: 'Nueva Estación',
        ubicacion: 'Norte',
        capacidad: 20,
        estado: 'Inactivo'
      };
      this.estaciones.push(nuevaEstacion);
      this.nuevaEstacionId++; 
    },
    abrirModalEditar(estacion, index) {
      this.estacionActual = { ...estacion };
      this.estacionIndex = index + (this.paginaActual - 1) * this.elementosPorPagina;
      this.showModal = true;
    },
    cerrarModal() {
      this.showModal = false;
    },
    editarEstacion() {
      this.estaciones[this.estacionIndex] = { ...this.estacionActual };
      this.cerrarModal();
    },
    eliminarEstacion(index) {
      const actualIndex = index + (this.paginaActual - 1) * this.elementosPorPagina;
      this.estaciones.splice(actualIndex, 1);
      alert(`Estación eliminada en el índice: ${index}`);
      if (this.estacionesPaginadas.length === 0 && this.paginaActual > 1) {
        this.paginaActual--;
      }
    },
    buscarEstaciones() {
      this.paginaActual = 1;
    },
    filtrarEstaciones() {
      if (this.terminoBusqueda === '') {
        return this.estaciones;
      }
      const termino = this.terminoBusqueda.toLowerCase();
      return this.estaciones.filter(estacion => 
        estacion.nombre.toLowerCase().includes(termino) ||
        estacion.ubicacion.toLowerCase().includes(termino) ||
        estacion.estado.toLowerCase().includes(termino)
      );
    }
  }
}
</script>

<style scoped>

</style>




