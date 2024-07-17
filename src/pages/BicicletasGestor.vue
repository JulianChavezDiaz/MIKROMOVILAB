<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Gestor Bicicletas</h1>
      <button @click="nuevaBicicleta" class="bg-green-500 text-white px-4 py-2 rounded">Nueva Bicicleta +</button>
    </div>
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="terminoBusqueda"
        @input="buscarBicicletas"
        type="text"
        placeholder="Buscar..."
        class="border rounded px-4 py-2"
      />
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100">
            <th class="py-2 px-4 border-b">Id Bicicleta</th>
            <th class="py-2 px-4 border-b">Nro. Serie</th>
            <th class="py-2 px-4 border-b">Modelo</th>
            <th class="py-2 px-4 border-b">Marca</th>
            <th class="py-2 px-4 border-b">Id Estación</th>
            <th class="py-2 px-4 border-b">Estado</th>
            <th class="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bicicleta, index) in bicicletasPaginadas" :key="index">
            <td class="py-2 px-4 border-b">{{ bicicleta.id }}</td>
            <td class="py-2 px-4 border-b">{{ bicicleta.serie }}</td>
            <td class="py-2 px-4 border-b">{{ bicicleta.modelo }}</td>
            <td class="py-2 px-4 border-b">{{ bicicleta.marca }}</td>
            <td class="py-2 px-4 border-b">{{ bicicleta.idEstacion }}</td>
            <td class="py-2 px-4 border-b">{{ bicicleta.estado }}</td>
            <td class="py-2 px-4 border-b">
              <button @click="abrirModalEditar(bicicleta, index)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">✏️</button>
              <button @click="eliminarBicicleta(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
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
        <h2 class="text-xl mb-4">Editar Bicicleta</h2>
        <form @submit.prevent="editarBicicleta">
          <div class="mb-2">
            <label for="serie" class="block">Nro. Serie</label>
            <input v-model="bicicletaActual.serie" id="serie" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="modelo" class="block">Modelo</label>
            <input v-model="bicicletaActual.modelo" id="modelo" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="marca" class="block">Marca</label>
            <input v-model="bicicletaActual.marca" id="marca" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="idEstacion" class="block">Id Estación</label>
            <input v-model="bicicletaActual.idEstacion" id="idEstacion" type="number" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="estado" class="block">Estado</label>
            <select v-model="bicicletaActual.estado" id="estado" class="border rounded w-full py-1 px-2">
              <option>Disponible</option>
              <option>Mantenimiento</option>
              <option>Alquilada</option>
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
      bicicletas: [
        { id: 10, serie: '123', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Disponible' },
        { id: 10, serie: '14f', modelo: 'MTB', marca: 'Giant', idEstacion: 110, estado: 'Mantenimiento' },
        { id: 10, serie: '15g', modelo: 'MTB', marca: 'Giant', idEstacion: 110, estado: 'Alquilada' },
        { id: 10, serie: '15f', modelo: 'MTB', marca: 'Giant', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15f', modelo: 'MTB', marca: 'Giant', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15f', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15f', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15g', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15v', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '12d', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15f', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15g', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15g', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15s', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '15o', modelo: 'MTB', marca: 'Trek', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '14d', modelo: 'MTB', marca: 'Giant', idEstacion: 110, estado: 'Inactivo' },
        { id: 10, serie: '42f', modelo: 'MTB', marca: 'Giant', idEstacion: 110, estado: 'Inactivo' },
      ],
      nuevaBicicletaId: 18,
      showModal: false,
      bicicletaActual: null,
      bicicletaIndexActual: null,
      terminoBusqueda: '',
      paginaActual: 1,
      itemsPorPagina: 10,
    };
  },
  computed: {
    bicicletasFiltradas() {
      if (!this.terminoBusqueda) {
        return this.bicicletas;
      }
      return this.bicicletas.filter(b =>
        Object.values(b).some(val =>
          String(val).toLowerCase().includes(this.terminoBusqueda.toLowerCase())
        )
      );
    },
    totalPages() {
      return Math.ceil(this.bicicletasFiltradas.length / this.itemsPorPagina);
    },
    bicicletasPaginadas() {
      const start = (this.paginaActual - 1) * this.itemsPorPagina;
      const end = start + this.itemsPorPagina;
      return this.bicicletasFiltradas.slice(start, end);
    },
  },
  methods: {
    nuevaBicicleta() {
      const nuevaBicicleta = {
        id: this.nuevaBicicletaId,
        serie: '',
        modelo: '',
        marca: '',
        idEstacion: '',
        estado: 'Inactivo',
      };
      this.bicicletas.push(nuevaBicicleta);
      this.nuevaBicicletaId++;
    },
    abrirModalEditar(bicicleta, index) {
      this.bicicletaActual = { ...bicicleta };
      this.bicicletaIndexActual = index;
      this.showModal = true;
    },
    editarBicicleta() {
      this.bicicletas.splice(this.bicicletaIndexActual, 1, this.bicicletaActual);
      this.cerrarModal();
    },
    eliminarBicicleta(index) {
      this.bicicletas.splice(index, 1);
    },
    cerrarModal() {
      this.showModal = false;
      this.bicicletaActual = null;
      this.bicicletaIndexActual = null;
    },
    buscarBicicletas() {
      this.paginaActual = 1;
    },
  },
};
</script>

<style scoped>
/* Asegúrate de agregar estilos para que sea responsive */
@media (max-width: 768px) {
  table {
    display: block;
    overflow-x: auto;
  }
  thead, tbody, th, td, tr {
    display: block;
  }
  th, td {
    width: 100%;
  }
}
</style>
