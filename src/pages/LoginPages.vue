<template>
  <div class="flex flex-col md:flex-row w-screen h-screen justify-center overflow-hidden">
    <div class="md:w-1/2 w-full h-1/2 md:h-full relative">
      <img class="w-full h-full object-cover" :src="require('@/assets/log-fondo.avif')" alt="Fondo" />
      <div class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <div class="text-white text-4xl font-bold">BIENVENIDO</div>
        <div class="text-white text-xl">AL sistema de gestion de alquiler MikroMoviLab </div>
      </div>
    </div>
    <div class="md:w-1/2 w-full h-1/2 md:h-full bg-gray-900 flex flex-col justify-center items-center p-8 md:p-14 text-gray-500">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center">
          <h1 class="text-teal-500 text-3xl font-bold">MikroMoviLab</h1>
          <p class="text-white">Movilidad sustentable para Quito</p>
        </div>
        <form @submit.prevent="submit" class="space-y-4">
          <div>
            <label class="block text-xs text-start ">Correo Electrónico</label>
            <input v-model="email" class="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700" type="email" placeholder="Enter Email" required />
          </div>
          <div>
            <label class="block text-xs text-start ">Contraseña</label>
            <input v-model="password" class="w-full px-4 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-sm text-gray-700" type="password" placeholder="Enter Password" required />
          </div>
          <div class="flex justify-between items-center">
            <label for="rememberMe" class=" flex items-center">
              <input type="checkbox" v-model="rememberMe" id="rememberMe" class="mr-2"> Recuérdame
            </label>
            <a href="#" class="text-xs text-blue-500 text-start">Recover Password ?</a>
          </div>
          <router-link to="/" class="w-full bg-teal-400 text-white py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-center block">
            Iniciar Sesión
          </router-link>
        </form>
        <router-link to="/Registro" class=" text-center block mt-4">
          ¿No eres miembro todavía? <span class="text-blue-500">Hacer clic aquí</span> para registrarse
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'example@example.com', // Datos quemados
      password: 'password123',       // Datos quemados
      rememberMe: false,
    };
  },
  methods: {
    submit() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      console.log('Remember Me:', this.rememberMe);
      // Aquí puedes añadir la lógica para manejar el envío del formulario
      alert('Formulario enviado con datos quemados');
    }
  }
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.bg-opacity-75 {
  background-color: rgba(241, 241, 241, 0.75);
}
</style>
