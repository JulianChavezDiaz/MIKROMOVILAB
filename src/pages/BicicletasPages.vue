<template>
  <div class="p-4 bg-gray-100 min-h-screen w-full">
    <div class="bg-gray-800 text-white p-4 rounded-t-lg">
      <h1 class="text-xl">Gestor Bicicletas</h1>
    </div>
    <div class="p-4 bg-white rounded-b-lg shadow-md">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
        <button @click="abrirModalNuevo" class="bg-green-500 text-white px-4 py-2 rounded mb-2 sm:mb-0">Nueva Bicicleta +</button>
        <input
          v-model="terminoBusqueda"
          @input="buscarBicicletas"
          type="text"
          placeholder="Buscar..."
          class="border rounded px-4 py-2 w-full sm:w-auto"
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
              <td class="py-2 px-4 border-b">{{ bicicleta.numeroSerie }}</td>
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

      <!-- Modal para editar bicicleta -->
      <div v-if="showModalEditar" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-gray-800 p-4 rounded shadow-lg w-full max-w-md">
          <h2 class="text-xl mb-4 text-white">Editar Bicicleta</h2>
          <form @submit.prevent="editarBicicleta">
            <div class="mb-2">
              <label for="numeroSerie" class="block text-white">Nro. Serie</label>
              <input v-model="bicicletaActual.numeroSerie" id="numeroSerie" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="modelo" class="block text-white">Modelo</label>
              <input v-model="bicicletaActual.modelo" id="modelo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="marca" class="block text-white">Marca</label>
              <input v-model="bicicletaActual.marca" id="marca" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idEstacion" class="block text-white">Id Estación</label>
              <input v-model="bicicletaActual.idEstacion" id="idEstacion" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estado" class="block text-white">Estado</label>
              <select v-model="bicicletaActual.estado" id="estado" class="border rounded w-full py-1 px-2">
                <option>Disponible</option>
                <option>Mantenimiento</option>
                <option>Alquilada</option>
                <option>Inactivo</option>
              </select>
            </div>
            <div class="flex justify-end">
              <button @click="cerrarModalEditar" type="button" class="bg-red-600 text-white px-4 py-2 rounded mr-2">Cancelar</button>
              <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Modal para crear nueva bicicleta -->
      <div v-if="showModalNuevo" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-gray-800 p-4 rounded shadow-lg w-full max-w-md">
          <h2 class="text-xl mb-4 text-white">Nueva Bicicleta</h2>
          <form @submit.prevent="agregarBicicleta">
            <div class="mb-2">
              <label for="numeroSerieNuevo" class="block text-white">Nro. Serie</label>
              <input v-model="nuevaBicicleta.numeroSerie" id="numeroSerieNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="modeloNuevo" class="block text-white">Modelo</label>
              <input v-model="nuevaBicicleta.modelo" id="modeloNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="marcaNuevo" class="block text-white">Marca</label>
              <input v-model="nuevaBicicleta.marca" id="marcaNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="idEstacionNuevo" class="block text-white">Id Estación</label>
              <input v-model="nuevaBicicleta.idEstacion" id="idEstacionNuevo" type="text" class="border rounded w-full py-1 px-2">
            </div>
            <div class="mb-2">
              <label for="estadoNuevo" class="block text-white">Estado</label>
              <select v-model="nuevaBicicleta.estado" id="estadoNuevo" class="border rounded w-full py-1 px-2">
                <option>Disponible</option>
                <option>Mantenimiento</option>
                <option>Alquilada</option>
                <option>Inactivo</option>
              </select>
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
      bicicletas: [
        { id: 1, numeroSerie: '123', modelo: 'MTB', marca: 'Trek', idEstacion: 'E001', estado: 'Disponible' },
        { id: 2, numeroSerie: '456', modelo: 'City', marca: 'Giant', idEstacion: 'E002', estado: 'Mantenimiento' }
      ],
      nuevaBicicletaId: 3,
      showModalEditar: false,
      showModalNuevo: false,
      bicicletaActual: {
        numeroSerie: '',
        modelo: '',
        marca: '',
        idEstacion: '',
        estado: ''
      },
      nuevaBicicleta: {
        numeroSerie: '',
        modelo: '',
        marca: '',
        idEstacion: '',
        estado: 'Disponible'
      },
      terminoBusqueda: '',
      paginaActual: 1,
      bicicletasPorPagina: 5
    };
  },
  computed: {
    bicicletasFiltradas() {
      return this.bicicletas.filter(bici => {
        const termino = this.terminoBusqueda.toLowerCase();
        return (
          bici.numeroSerie.toLowerCase().includes(termino) ||
          bici.modelo.toLowerCase().includes(termino) ||
          bici.marca.toLowerCase().includes(termino) ||
          bici.idEstacion.toLowerCase().includes(termino) ||
          bici.estado.toLowerCase().includes(termino)
        );
      });
    },
    totalPages() {
      return Math.ceil(this.bicicletasFiltradas.length / this.bicicletasPorPagina);
    },
    bicicletasPaginadas() {
      const start = (this.paginaActual - 1) * this.bicicletasPorPagina;
      const end = start + this.bicicletasPorPagina;
      return this.bicicletasFiltradas.slice(start, end);
    }
  },
  methods: {
    abrirModalEditar(bicicleta, index) {
      this.bicicletaActual = { ...bicicleta };
      this.bicicletaActual.index = index;
      this.showModalEditar = true;
    },
    cerrarModalEditar() {
      this.showModalEditar = false;
    },
    abrirModalNuevo() {
      this.showModalNuevo = true;
    },
    cerrarModalNuevo() {
      this.showModalNuevo = false;
    },
    agregarBicicleta() {
      this.bicicletas.push({ ...this.nuevaBicicleta, id: this.nuevaBicicletaId++ });
      this.nuevaBicicleta = {
        numeroSerie: '',
        modelo: '',
        marca: '',
        idEstacion: '',
        estado: 'Disponible'
      };
      this.cerrarModalNuevo();
    },
    editarBicicleta() {
      const index = this.bicicletaActual.index;
      if (index !== undefined) {
        this.$set(this.bicicletas, index, { ...this.bicicletaActual });
      }
      this.cerrarModalEditar();
    },
    eliminarBicicleta(index) {
      this.bicicletas.splice(index, 1);
    },
    buscarBicicletas() {
      this.paginaActual = 1;
    }
  }
};
</script>

<style scoped>
/* Añade tus estilos aquí */
</style>
