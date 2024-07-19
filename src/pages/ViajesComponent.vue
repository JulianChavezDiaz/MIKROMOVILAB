<template>
  <div class="flex h-screen">
    <!-- Barra lateral -->
    <div class="w-[250px] h-full text-gray-400">
      <div class="h-[50px] bg-white flex justify-start items-center">
        <div class="px-[20px]">
          <span class="font-bold text-xl text-black">Mikro</span>
          <span class="font-bold text-xl text-gray-500">mobiLAB</span>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] bg-gray-800">
        <div class="flex flex-col justify-between h-full space-y-[10px]">
          <div class="flex flex-col justify-between">
            <!-- Usuario -->
            <div class="px-[20px] w-full text-sm h-[100px] bg-gray-900 flex justify-start items-center text-white hover:bg-transparent">
              <div class="avatar mt-3 flex flex-col justify-between">
                <div class="w-10 h-10 rounded-full overflow-hidden">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <p>Abigail Cepeda</p>
                <p class="text-sm text-gray-500">Admin</p>
              </div>
            </div>
            <div class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium">
              Navigation
            </div>

            <!-- Navegación -->
            <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Home -->
              </svg>
              Home
            </router-link>
            <button @click="showComponent('usuarios')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Usuarios -->
              </svg>
              Usuarios
            </button>
            <button @click="showComponent('estaciones')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Estaciones -->
              </svg>
              Estaciones
            </button>
            <button @click="showComponent('bicicletas')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Bicicletas -->
              </svg>
              Bicicletas
            </button>
            <button @click="showComponent('mantenimiento')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Mantenimiento -->
              </svg>
              Mantenimiento
            </button>
            <button @click="showComponent('alquiler')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Alquiler -->
              </svg>
              Alquiler
            </button>
            <button @click="showComponent('estadisticas')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Estadisticas -->
              </svg>
              Estadisticas
            </button>
            <button @click="showComponent('viajes')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Viajes -->
              </svg>
              Viajes
            </button>
            <button @click="showComponent('ubicacion')" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <!-- Icono de Ubicacion -->
              </svg>
              Ubicacion
            </button>

            <!-- Más enlaces aquí -->

          </div>
          <div class="py-[10px]">
            <router-link to="/setting" class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
              <!-- Icono aquí -->
              Login/Registro
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Contenido principal -->
    <div class="w-full h-full">
      <div class="h-[50px] bg-white text-black flex justify-end items-center px-4">
        <div class="form-control mr-4 flex items-center relative">
          <input type="text" placeholder="Buscar" class="input input-bordered w-24 md:w-auto rounded-md bg-white pr-10 border border-black" />
          <button class="absolute right-2 text-white p-2 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-5">
              <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div class="flex items-center">
          <div class="avatar w-8 h-8 rounded-full overflow-hidden">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar">
          </div>
          <span class="text-sm font-medium ml-2 mr-4">Abigail Cepeda</span>
        </div>
      </div>
      <div id="Menu" class="h-[calc(100vh-50px)] w-full">
        <component :is="currentComponent"></component>
      </div>
    </div>
  </div>
</template>

<script>
import home from './home.vue';
import UsuariosGestor from './UsuariosGestor.vue';
import EstacionesGestor from './EstacionesGestor.vue';
import BicicletasGestor from './BicicletasGestor.vue';
import MantenimientoGestor from './MantenimientoGestor.vue';
import Estadisticas from './Estadisticas.vue';
import ViajesUs from './ViajesUs.vue';
import MapaUbicacion from './MapaUbicacion.vue';
import AlquilerGestor from './AlquilerGestor.vue';

export default {
  components: {
    home,
    UsuariosGestor,
    EstacionesGestor,
    BicicletasGestor,
    MantenimientoGestor,
    AlquilerGestor,
    Estadisticas,
    ViajesUs,
    MapaUbicacion
  },
  data() {
    return {
      currentComponent: 'Home'
    };
  },
  methods: {
    showComponent(componentName) {
      this.currentComponent = componentName;
    }
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>
