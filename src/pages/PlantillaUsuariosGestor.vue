<template>
  
    <!-- Contenido principal -->
    <div class="w-full h-full bg-gray-300">
      <div class="h-[50px] bg-white text-black flex justify-between items-center px-4">
        <div class="text-lg font-semibold">Gestor Usuarios</div>
      
      
      </div>
      <div class="h-[calc(100vh-50px)] p-4 overflow-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="w-1/12 py-2">ID</th>
              <th class="w-2/12 py-2">Nombre</th>
              <th class="w-2/12 py-2">Apellido</th>
              <th class="w-3/12 py-2">Correo Electrónico</th>
              <th class="w-1/12 py-2">Teléfono</th>
              <th class="w-1/12 py-2">Rol</th>
              <th class="w-1/12 py-2">Estado</th>
              <th class="w-1/12 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id" class="text-center border-b">
              <td>{{ usuario.id }}</td>
              <td>{{ usuario.nombre }}</td>
              <td>{{ usuario.apellido }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono }}</td>
              <td>{{ usuario.rol }}</td>
              <td>
                <span :class="usuario.estado ? 'text-green-600' : 'text-red-600'">{{ usuario.estado ? 'Activo' : 'Inactivo' }}</span>
              </td>
              <td>
                <button class="bg-blue-500 text-white p-1 rounded mx-1">Editar</button>
                <button class="bg-red-500 text-white p-1 rounded mx-1">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="mt-4">
          <!-- Paginación aquí -->
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarCollapsed: false,
      usuarios: [
        { id: 1, nombre: 'John', apellido: 'Doe', email: 'john@example.com', telefono: '123456789', rol: 'Admin', estado: true },
        // Agrega más usuarios aquí
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
}
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para el componente GestorUsuarios */
</style>
