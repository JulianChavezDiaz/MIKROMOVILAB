<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
      <div class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-white mb-8">MikromoviLAB</h1>
        <form @submit.prevent="submit">
          <div class="mb-4">
            <label class="block text-gray-300 mb-2" for="email">Email Address</label>
            <input type="email" v-model="email" id="email" class="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-300 mb-2" for="password">Password</label>
            <input type="password" v-model="password" id="password" class="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4 flex items-center">
            <input type="checkbox" v-model="rememberMe" id="rememberMe" class="mr-2">
            <label for="rememberMe" class="text-gray-300">Recuérdame</label>
          </div>
          <router-link to="/" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center block">
            Sign me in
          </router-link>
        </form>
        <router-link to="/Registro"><p class="text-gray-500 text-center mt-4">
          ¿No eres miembro todavía? <a href="#" class="text-blue-500">Hacer clic aquí</a> para registrarse
        </p></router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
      }
    },
    methods: {
      submit() {
        // Lógica para manejar el envío del formulario
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        console.log('Remember Me:', this.rememberMe);
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: #1a202c; /* Color de fondo de la página */
  }
  </style>
  