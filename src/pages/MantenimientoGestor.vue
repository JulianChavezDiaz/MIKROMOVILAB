<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between mb-4">
      <button @click="nuevoMantenimiento" class="bg-green-500 text-white px-4 py-2 rounded">Nuevo Mantenimiento</button>
      <input v-model="terminoBusqueda" @input="buscarMantenimientos" type="text" placeholder="Buscar" class="border p-2 rounded"/>
    </div>
    <table class="min-w-full bg-white">
      <thead>
        <tr>
          <th class="py-2 px-4 border">Id Mant.</th>
          <th class="py-2 px-4 border">Id Bicicleta</th>
          <th class="py-2 px-4 border">Fecha Inicio</th>
          <th class="py-2 px-4 border">Fecha Fin</th>
          <th class="py-2 px-4 border">Descripción</th>
          <th class="py-2 px-4 border">Estado</th>
          <th class="py-2 px-4 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(mantenimiento, index) in mantenimientosPaginados" :key="mantenimiento.id" class="text-center">
          <td class="py-2 px-4 border">{{ mantenimiento.id }}</td>
          <td class="py-2 px-4 border">{{ mantenimiento.idBicicleta }}</td>
          <td class="py-2 px-4 border">{{ mantenimiento.fechaInicio }}</td>
          <td class="py-2 px-4 border">{{ mantenimiento.fechaFin }}</td>
          <td class="py-2 px-4 border">{{ mantenimiento.descripcion }}</td>
          <td class="py-2 px-4 border">{{ mantenimiento.estado }}</td>
          <td class="py-2 px-4 border">
            <button @click="abrirModalEditar(mantenimiento, index)" class="bg-yellow-400 text-white px-2 py-1 rounded mr-2">✏️</button>
            <button @click="eliminarMantenimiento(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center mt-4">
      <button @click="paginaActual = page" v-for="page in totalPages" :key="page" :class="['px-3 py-1 border rounded mx-1', {'bg-blue-500 text-white': page === paginaActual}]" class="cursor-pointer">{{ page }}</button>
    </div>

    <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen px-4">
        <div class="bg-white p-4 rounded shadow-lg max-w-md w-full">
          <h3 class="text-lg mb-4">Editar Mantenimiento</h3>
          <div class="mb-4">
            <label class="block mb-1">Id Bicicleta</label>
            <input v-model="mantenimientoActual.idBicicleta" type="text" class="border p-2 rounded w-full"/>
          </div>
          <div class="mb-4">
            <label class="block mb-1">Fecha Inicio</label>
            <input v-model="mantenimientoActual.fechaInicio" type="date" class="border p-2 rounded w-full"/>
          </div>
          <div class="mb-4">
            <label class="block mb-1">Fecha Fin</label>
            <input v-model="mantenimientoActual.fechaFin" type="date" class="border p-2 rounded w-full"/>
          </div>
          <div class="mb-4">
            <label class="block mb-1">Descripción</label>
            <input v-model="mantenimientoActual.descripcion" type="text" class="border p-2 rounded w-full"/>
          </div>
          <div class="mb-4">
            <label class="block mb-1">Estado</label>
            <select v-model="mantenimientoActual.estado" class="border p-2 rounded w-full">
              <option value="Terminado">Terminado</option>
              <option value="Pendiente">Pendiente</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button @click="cerrarModal" class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancelar</button>
            <button @click="editarMantenimiento" class="bg-blue-500 text-white px-4 py-2 rounded">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mantenimientos: [
        { id: 1, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 2, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 3, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 4, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 5, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 6, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 7, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 8, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 9, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 10, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 11, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 12, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 13, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 14, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 15, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
        { id: 16, idBicicleta: 10, fechaInicio: '2024-07-22', fechaFin: '2024-07-28', descripcion: '', estado: 'Terminado' },
      ],
      nuevaMantenimientoId: 17,
      showModal: false,
      mantenimientoActual: null,
      mantenimientoIndexActual: null,
      terminoBusqueda: '',
      paginaActual: 1,
      itemsPorPagina: 10,
    };
  },
  computed: {
    mantenimientosFiltrados() {
      if (!this.terminoBusqueda) {
        return this.mantenimientos;
      }
      return this.mantenimientos.filter(m =>
        Object.values(m).some(val =>
          String(val).toLowerCase().includes(this.terminoBusqueda.toLowerCase())
        )
      );
    },
    totalPages() {
      return Math.ceil(this.mantenimientosFiltrados.length / this.itemsPorPagina);
    },
    mantenimientosPaginados() {
      const start = (this.paginaActual - 1) * this.itemsPorPagina;
      const end = start + this.itemsPorPagina;
      return this.mantenimientosFiltrados.slice(start, end);
    }
  },
  methods: {
    nuevoMantenimiento() {
      const nuevoMantenimiento = {
        id: this.nuevaMantenimientoId++,
        idBicicleta: '',
        fechaInicio: '',
        fechaFin: '',
        descripcion: '',
        estado: '',
      };
      this.mantenimientos.push(nuevoMantenimiento);
      this.abrirModalEditar(nuevoMantenimiento, this.mantenimientos.length - 1);
    },
    abrirModalEditar(mantenimiento, index) {
      this.mantenimientoActual = { ...mantenimiento };
      this.mantenimientoIndexActual = index;
      this.showModal = true;
    },
    cerrarModal() {
      this.showModal = false;
      this.mantenimientoActual = null;
      this.mantenimientoIndexActual = null;
    },
    editarMantenimiento() {
      this.$set(this.mantenimientos, this.mantenimientoIndexActual, { ...this.mantenimientoActual });
      this.cerrarModal();
    },
    eliminarMantenimiento(index) {
      this.mantenimientos.splice(index, 1);
    },
    buscarMantenimientos() {
      this.paginaActual = 1;
    }
  }
};
</script>

<style>
body {
  background-color: #f8fafc;
}
</style>
