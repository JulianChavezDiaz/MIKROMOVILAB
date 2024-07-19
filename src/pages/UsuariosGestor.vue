<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Gestor Usuarios</h1>
      <button @click="nuevoUsuario" class="bg-green-500 text-white px-4 py-2 rounded">Nuevo Usuario +</button>
    </div>
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="terminoBusqueda"
        @input="buscarUsuarios"
        type="text"
        placeholder="Buscar..."
        class="border rounded px-4 py-2"
      />
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead>
          <tr class="bg-gray-100">
            <th class="py-2 px-4 border-b">Id Usuario</th>
            <th class="py-2 px-4 border-b">Nombres</th>
            <th class="py-2 px-4 border-b">Apellidos</th>
            <th class="py-2 px-4 border-b">Correo Electrónico</th>
            <th class="py-2 px-4 border-b">Contraseña</th>
            <th class="py-2 px-4 border-b">Dirección</th>
            <th class="py-2 px-4 border-b">Rol</th>
            <th class="py-2 px-4 border-b">Estado</th>
            <th class="py-2 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuariosPaginados" :key="index">
            <td class="py-2 px-4 border-b">{{ usuario.id }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.nombre }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.apellido }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.email }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.contrasena }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.direccion }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.rol }}</td>
            <td class="py-2 px-4 border-b">{{ usuario.estado }}</td>
            <td class="py-2 px-4 border-b">
              <button @click="abrirModalEditar(usuario, index)" class="bg-yellow-500 text-white px-2 py-1 rounded mr-2">✏️</button>
              <button @click="eliminarUsuario(index)" class="bg-red-500 text-white px-2 py-1 rounded">🗑️</button>
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
        <h2 class="text-xl mb-4">Editar Usuario</h2>
        <form @submit.prevent="editarUsuario">
          <div class="mb-2">
            <label for="nombre" class="block">Nombre</label>
            <input v-model="usuarioActual.nombre" id="nombre" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="apellido" class="block">Apellido</label>
            <input v-model="usuarioActual.apellido" id="apellido" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="email" class="block">Correo Electrónico</label>
            <input v-model="usuarioActual.email" id="email" type="email" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="contrasena" class="block">Contraseña</label>
            <input v-model="usuarioActual.contrasena" id="contrasena" type="password" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="direccion" class="block">Dirección</label>
            <input v-model="usuarioActual.direccion" id="direccion" type="text" class="border rounded w-full py-1 px-2">
          </div>
          <div class="mb-2">
            <label for="rol" class="block">Rol</label>
            <select v-model="usuarioActual.rol" id="estado" class="border rounded w-full py-1 px-2">
              <option>Admin</option>
              <option>Cliente</option>
            </select>
          </div>
          <div class="mb-2">
            <label for="estado" class="block">Estado</label>
            <select v-model="usuarioActual.estado" id="estado" class="border rounded w-full py-1 px-2">
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
      usuarios: [
        { id: 1, nombre: 'Hector', apellido: 'Martinez', email: 'hm01@gmail.com', contrasena: '1234', direccion: 'Solan oe5', rol: 'Admin', estado: 'Inactivo' },
        { id: 2, nombre: 'Hector', apellido: 'Martinez', email: 'hm01@gmail.com', contrasena: '1234', direccion: 'Solan oe5', rol: 'Admin', estado: 'Inactivo' },
        // Repetir los datos para llenar la tabla
      ],
      showModal: false,
      usuarioActual: {
        id: null,
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        direccion: '',
        rol: '',
        estado: ''
      },
      usuarioIndex: null,
      paginaActual: 1,
      elementosPorPagina: 10,
      terminoBusqueda: '',
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filtrarUsuarios().length / this.elementosPorPagina);
    },
    usuariosPaginados() {
      const inicio = (this.paginaActual - 1) * this.elementosPorPagina;
      const fin = inicio + this.elementosPorPagina;
      return this.filtrarUsuarios().slice(inicio, fin);
    }
  },
  methods: {
    nuevoUsuario() {
      const nuevoUsuario = {
        id: this.usuarios.length + 1,
        nombre: 'Nuevo',
        apellido: 'Usuario',
        email: 'nuevo@usuario.com',
        contrasena: '1234',
        direccion: 'Nueva direccion',
        rol: 'Usuario',
        estado: 'Activo'
      };
      this.usuarios.push(nuevoUsuario);
    },
    abrirModalEditar(usuario, index) {
      this.usuarioActual = { ...usuario };
      this.usuarioIndex = index + (this.paginaActual - 1) * this.elementosPorPagina;
      this.showModal = true;
    },
    cerrarModal() {
      this.showModal = false;
    },
    editarUsuario() {
      this.usuarios[this.usuarioIndex] = { ...this.usuarioActual };
      this.cerrarModal();
    },
    eliminarUsuario(index) {
      const actualIndex = index + (this.paginaActual - 1) * this.elementosPorPagina;
      this.usuarios.splice(actualIndex, 1);
    },
    buscarUsuarios() {
      this.paginaActual = 1;
    },
    filtrarUsuarios() {
      if (!this.terminoBusqueda) {
        return this.usuarios;
      }
      const termino = this.terminoBusqueda.toLowerCase();
      return this.usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(termino) ||
        usuario.apellido.toLowerCase().includes(termino) ||
        usuario.email.toLowerCase().includes(termino) ||
        usuario.direccion.toLowerCase().includes(termino) ||
        usuario.rol.toLowerCase().includes(termino) ||
        usuario.estado.toLowerCase().includes(termino)
      );
    }
  }
}
</script>

<style scoped>
/* Agregar estilos personalizados aquí si es necesario */
</style>
