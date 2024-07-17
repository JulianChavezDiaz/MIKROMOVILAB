<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-800">
      <form @submit.prevent="crearUsuario" class="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold text-center text-white mb-6">Crear Usuario</h2>
        <div class="mb-4">
          <label for="nombre" class="block text-gray-500 mb-2">Nombre</label>
          <input type="text" id="nombre" v-model="nombre" class="w-full px-3 py-2 rounded bg-gray-700 text-white" required />
        </div>
        <div class="mb-4">
          <label for="apellido" class="block text-gray-500 mb-2">Apellido</label>
          <input type="text" id="apellido" v-model="apellido" class="w-full px-3 py-2 rounded bg-gray-700 text-white" required />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-500 mb-2">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" class="w-full px-3 py-2 rounded bg-gray-700 text-white" required />
        </div>
        <div class="mb-4">
          <label for="contrasena" class="block text-gray-500 mb-2">Contraseña</label>
          <input type="password" id="contrasena" v-model="contrasena" class="w-full px-3 py-2 rounded bg-gray-700 text-white" required />
        </div>
        <div class="mb-4">
          <label for="direccion" class="block text-gray-500 mb-2">Dirección</label>
          <input type="text" id="direccion" v-model="direccion" class="w-full px-3 py-2 rounded bg-gray-700 text-white" required />
        </div>
        <div class="mb-6">
          <label for="rol" class="block text-gray-500 mb-2">Rol</label>
          <select id="rol" v-model="rol" class="w-full px-3 py-2 rounded bg-gray-700 text-white" required>
            <option value="" disabled>Seleccione el rol</option>
            <option value="admin">Admin</option>
            <option value="usuario">Usuario</option>
          </select>
        </div>
        <button type="submit" class="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 focus:outline-none focus:bg-teal-600">Crear</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        apellido: '',
        email: '',
        contrasena: '',
        direccion: '',
        rol: ''
      };
    },
    methods: {
      crearUsuario() {
        // Aquí puedes agregar la lógica para enviar los datos al backend
        console.log({
          nombre: this.nombre,
          apellido: this.apellido,
          email: this.email,
          contrasena: this.contrasena,
          direccion: this.direccion,
          rol: this.rol
        });
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  </style>
  