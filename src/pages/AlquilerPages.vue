<template>
  <div class="p-4 sm:p-8 bg-gray-100 min-h-screen">
    <div class="bg-gray-800 text-white p-4 rounded-t-lg">
      <h1 class="text-lg sm:text-xl">Gestor Alquiler</h1>
    </div>

    <div class="p-4 bg-gray-200 rounded-b-lg shadow-md">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
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
        <table class="min-w-full bg-gray-200 border border-gray-200 text-xs sm:text-sm">
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
            <tr v-for="(alquiler, index) in alquileresPaginados" :key="index" :class="{'bg-gray-200': !alquiler.idAlquiler}">
              <td class="py-2 px-4 border-b">{{ alquiler.idAlquiler || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.idUsuario || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.idBicicleta || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.idEstacion || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.alquilerInicio || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.alquilerFin || '-' }}</td>
              <td class="py-2 px-4 border-b">{{ alquiler.estado || '-' }}</td>
              <td class="py-2 px-4 border-b flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button v-if="alquiler.idAlquiler" @click="abrirModalEditar(alquiler, index)" class="bg-yellow-500 text-white px-2 py-1 rounded">✏️</button>
                <button v-if="alquiler.idAlquiler" @click="eliminarAlquiler(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
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
      <!-- Modal para editar alquiler -->
      <div v-if="showModalEditar" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">        <div class="bg-gray-800 p-4 rounded shadow-lg max-w-md w-full">
          <h2 class="text-lg mb-4 text-white">Editar Alquiler</h2>
          <form @submit.prevent="editarAlquiler">
            <div class="mb-2">
              <label for="idUsuario" class="block text-white" >Id Usuario</label>
              <input v-model="alquilerActual.idUsuario" id="idUsuario" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idBicicleta" class="block text-white">Id Bicicleta</label>
              <input v-model="alquilerActual.idBicicleta" id="idBicicleta" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idEstacion" class="block text-white">Id Estación</label>
              <input v-model="alquilerActual.idEstacion" id="idEstacion" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="alquilerInicio" class="block text-white">Alquiler Inicio</label>
              <input v-model="alquilerActual.alquilerInicio" id="alquilerInicio" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="alquilerFin" class="block text-white">Alquiler Fin</label>
              <input v-model="alquilerActual.alquilerFin" id="alquilerFin" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-4">
              <label for="estado" class="block text-white">Estado</label>
              <select v-model="alquilerActual.estado" id="estado" class="border rounded w-full py-1 px-2">
                <option value="Terminado">Terminado</option>
                <option value="En Curso">En Curso</option>
                <!-- Más opciones aquí -->
              </select>
            </div>
            <div class="flex justify-end">
              <button type="button" @click="cerrarModal" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      </div>
      <!-- Modal para agregar nuevo alquiler -->
      <div v-if="showModalNuevo" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
        <div class="bg-gray-800 p-4 rounded shadow-lg max-w-md w-full">
          <h2 class="text-lg mb-4 text-white">Nuevo Alquiler</h2>
          <form @submit.prevent="agregarAlquiler">
            <div class="mb-2">
              <label for="nuevoIdUsuario" class="block text-white">Id Usuario</label>
              <input v-model="nuevoAlquiler.idUsuario" id="nuevoIdUsuario" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="nuevoIdBicicleta" class="block text-white">Id Bicicleta</label>
              <input v-model="nuevoAlquiler.idBicicleta" id="nuevoIdBicicleta" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="nuevoIdEstacion" class="block text-white">Id Estación</label>
              <input v-model="nuevoAlquiler.idEstacion" id="nuevoIdEstacion" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="nuevoAlquilerInicio" class="block text-white">Alquiler Inicio</label>
              <input v-model="nuevoAlquiler.alquilerInicio" id="nuevoAlquilerInicio" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="nuevoAlquilerFin" class="block text-white">Alquiler Fin</label>
              <input v-model="nuevoAlquiler.alquilerFin" id="nuevoAlquilerFin" type="date" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-4">
              <label for="nuevoEstado" class="block text-white">Estado</label>
              <select v-model="nuevoAlquiler.estado" id="nuevoEstado" class="border rounded w-full py-1 px-2">
                <option value="Terminado">Terminado</option>
                <option value="En Curso">En Curso</option>
                <!-- Más opciones aquí -->
              </select>
            </div>
            <div class="flex justify-end">
              <button type="button" @click="cerrarModal" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Agregar</button>
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
        { idAlquiler: 1, idUsuario: 101, idBicicleta: 1001, idEstacion: 201, alquilerInicio: '2024-01-01', alquilerFin: '2024-01-05', estado: 'Terminado' },
        // Más datos de ejemplo aquí...
      ],
      terminoBusqueda: '',
      paginaActual: 1,
      itemsPorPagina: 10,
      showModalEditar: false,
      showModalNuevo: false,
      alquilerActual: {},
      nuevoAlquiler: { idUsuario: '', idBicicleta: '', idEstacion: '', alquilerInicio: '', alquilerFin: '', estado: 'Terminado' },
    };
  },
  computed: {
    alquileresPaginados() {
      const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
      const fin = inicio + this.itemsPorPagina;
      return this.alquileres.slice(inicio, fin);
    },
    totalPages() {
      return Math.ceil(this.alquileres.length / this.itemsPorPagina);
    },
  },
  methods: {
    buscarAlquileres() {
      // Implementar lógica de búsqueda
    },
    abrirModalEditar(alquiler, index) {
      this.alquilerActual = { ...alquiler, index };
      this.showModalEditar = true;
    },
    abrirModalNuevo() {
      this.showModalNuevo = true;
    },
    cerrarModal() {
      this.showModalEditar = false;
      this.showModalNuevo = false;
    },
    editarAlquiler() {
      const index = this.alquilerActual.index;
      this.alquileres.splice(index, 1, this.alquilerActual);
      this.cerrarModal();
    },
    eliminarAlquiler(index) {
      this.alquileres.splice(index, 1);
    },
    agregarAlquiler() {
      this.alquileres.push({ ...this.nuevoAlquiler, idAlquiler: this.alquileres.length + 1 });
      this.cerrarModal();
    },
  },
};
</script>

<style scoped>

.table-responsive {
  overflow-x: auto;
}
</style>
