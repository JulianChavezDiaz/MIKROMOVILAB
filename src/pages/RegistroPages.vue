<template>
  <div class="flex w-screen h-screen">
    <!-- Left Side: Image -->
    <div class="w-1/2 h-full relative">
      <img class="w-full h-full object-cover" src="@/assets/log-fondo.avif" alt="Fondo" />
      <div class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <div class="text-white text-4xl font-bold">BIENVENIDO</div>
        <div class="text-white text-xl">Registrate para que puedas acceder al sistema</div>
      </div>
    </div>

    <!-- Right Side: Form -->
    <div class="w-1/2 h-full bg-gray-900 flex flex-col justify-center items-center p-14 text-gray-500">
      <div class="w-full max-w-md space-y-6">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-teal-500 text-3xl font-bold">MikroMoviLab</h1>
          <p class="text-white">Movilidad sustentable para Quito</p>
        </div>

        <!-- Form -->
        <form class="w-full mt-6 space-y-4">
          <div class="flex space-x-4">
            <div class="flex-1">
              <label class="block text-xs text-start ">Nombre <span class="text-rose-500">*</span></label>
              <input class="w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-900" type="text" placeholder="Nombre" />
            </div>
            <div class="flex-1">
              <label class="block text-xs text-start">Apellido <span class="text-rose-500">*</span></label>
              <input class="w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-900" type="text" placeholder="Apellido" />
            </div>
          </div>
          <div>
            <label class="block text-xs text-start">Email <span class="text-rose-500">*</span></label>
            <input class="w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-900" type="email" placeholder="Correo Electrónico" />
          </div>
          <div>
            <label class="block text-xs text-start">Cédula <span class="text-rose-500">*</span></label>
            <input class="w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-900" type="text" placeholder="Cédula" />
          </div>
          <div>
            <label class="block text-xs text-start">Contraseña <span class="text-rose-500">*</span></label>
            <input class="w-full px-3 py-2 mt-1 bg-gray-100 border border-gray-300 rounded text-xs text-gray-900" type="password" placeholder="Contraseña" />
          </div>
          <div class="mt-4 flex items-start">
            <input type="checkbox" class="w-5 h-5 bg-white border border-gray-400 rounded" />
            <div class="ml-2 text-xs ">
              Al hacer clic en Registrarse, aceptas nuestros <a href="#" class="text-blue-500 underline">Terminos</a> y que has leído nuestra <a href="#" class="text-blue-500 underline">Política de datos</a>, Incluyendo nuestro <a href="#" class="text-blue-500 underline">uso de cookies</a>.
            </div>
          </div>
          <router-link to="/Login">
            <button type="submit" class="w-full mt-6 px-40 py-3.5 bg-teal-500 rounded-md text-white text-xs font-semibold">Registrarse</button>
          </router-link>
          <router-link to="/Login">
            <div class="mt-4 text-xs ">
              ¿Ya tienes una cuenta creada? <a href="#" class="text-blue-500 underline">Click aquí</a> para iniciar sesión
            </div>
          </router-link>
        </form>

        <!-- Footer -->
        <div class="w-full mt-10 h-px bg-gray-400 opacity-40"></div>
        <div class="mt-4 w-full text-center text-xs text-gray-500">© MikroMoviLab All Right Reserved 2024</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.bg-black.bg-opacity-50 {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
