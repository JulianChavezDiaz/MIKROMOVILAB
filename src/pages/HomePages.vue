<template>
  <div class="p-8 bg-gray-90 min-h-screen w-full">
    <div class="bg-gray-800 text-white p-4 rounded-t-lg">
      <h1 class="text-xl">Sistema de Alquiler</h1>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div class="bg-orange-500 text-white p-4 rounded shadow">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl">{{ usuariosRegistrados }}</h2>
            <p>Usuarios Registrados</p>
          </div>
          <span class="material-icons">group</span>
        </div>
        <a href="/Usuarios" class="block text-sm mt-2 underline">View Details</a>
      </div>
      <div class="bg-blue-500 text-white p-4 rounded shadow">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl">{{ viajesRegistrados }}</h2>
            <p>Viajes Registrados</p>
          </div>
          <span class="material-icons">map</span>
        </div>
        <a href="/Viajes" class="block text-sm mt-2 underline">View Details</a>
      </div>
      <div class="bg-teal-500 text-white p-4 rounded shadow">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl">{{ alquileresRegistrados }}</h2>
            <p>Alquileres Registrados</p>
          </div>
          <span class="material-icons">description</span>
        </div>
        <a href="/Alquileres" class="block text-sm mt-2 underline">View Details</a>
      </div>
      <div class="bg-red-500 text-white p-4 rounded shadow">
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-2xl">{{ estacionesUso }}</h2>
            <p>Estaciones en Uso</p>
          </div>
          <span class="material-icons">warehouse</span>
        </div>
        <a href="/estaciones" class="block text-sm mt-2 underline">View Details</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuariosRegistrados: 0,
      viajesRegistrados: 0,
      alquileresRegistrados: 0,
      estacionesUso: 0,
    };
  },
  created() {
    this.fetchStatistics();
  },
  methods: {
    fetchStatistics() {
      // Simulando una solicitud API para obtener estadísticas
      setTimeout(() => {
        this.usuariosRegistrados = 21;
        this.viajesRegistrados = 23;
        this.alquileresRegistrados = 10;
        this.estacionesUso = 5;
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* Agrega aquí estilos personalizados si es necesario */
</style>

  
