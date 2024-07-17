<template>
    <div class="min-h-screen flex items-center justify-center bg-cover bg-center" :style="{ backgroundImage: `url(${require('@/assets/fondo.png')})` }">
      <div class="bg-gray-800 p-8  shadow-md w-full max-w-md bg-opacity-75">
        <h1 class="text-2xl font-bold text-center text-white mb-8">MikromoviLAB</h1>
        <form @submit.prevent="submit">
          <div class="mb-4">
            <input placeholder="Correo Electrónico" type="email" v-model="email" id="email" class="w-full px-3 py-2 bg-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <input placeholder="Contraseña" type="password" v-model="password" id="password" class="w-full px-3 py-2 bg-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4 flex items-center">
            <input type="checkbox" v-model="rememberMe" id="rememberMe" class="mr-2">
            <label for="rememberMe" class="text-gray-300">Recuérdame</label>
          </div>
          <router-link to="/" class="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-center block">
            Iniciar Sesión
          </router-link>
        </form>
        <router-link to="/Registro"><p class="text-white text-center mt-4">
          ¿No eres miembro todavía? <a href="#" class="text-blue-400">Hacer clic aquí</a> para registrarse
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
.bg-opacity-75 {
  background-color: rgba(241, 241, 241, 0.278);
}
</style>
  