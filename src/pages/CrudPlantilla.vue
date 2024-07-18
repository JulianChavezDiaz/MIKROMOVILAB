<template>
  <div class="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-image">
    <form @submit.prevent="crearUsuario" class="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-3xl bg-opacity-75">
      <h2 class="text-2xl font-bold text-center text-white mb-6">Alquiler de Bicicleta</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label for="usuario" class="block text-white mb-2">Usuario</label>
          <input type="text" id="usuario" v-model="usuario" class="w-full px-3 py-2 rounded bg-white text-bg-gray-800" required />
        </div>
        <div>
          <label for="bicicleta" class="block text-white mb-2">Bicicleta</label>
          <input type="text" id="bicicleta" v-model="bicicleta" class="w-full px-3 py-2 rounded bg-white text-bg-gray-800" required />
        </div>
        <div>
          <label for="hora" class="block text-white mb-2">Hora inicio</label>
          <input type="time" id="hora" v-model="hora" class="w-full px-3 py-2 rounded bg-white text-bg-gray-800" required />
        </div>
        <div>
          <label for="hora-fin" class="block text-white mb-2">Hora fin</label>
          <input type="time" id="hora-fin" v-model="horaFin" class="w-full px-3 py-2 rounded  bg-white text-bg-gray-800" required />
        </div>
        <div class="col-span-1 md:col-span-2 mb-6">
          <label for="estacion-inicio" class="block text-white mb-2">Estación Inicio</label>
          <select id="estacion-inicio" v-model="estacionInicio" class="w-full px-3 py-2 rounded  bg-white text-bg-gray-800" required>
            <option value="" disabled>Seleccione la estación</option>
            <option value="admin">Carolina</option>
            <option value="usuario">Ejido</option>
            <option value="admin">Universidades</option>
            <option value="admin">Gaspar De Villarruel</option>
            <option value="admin">Ya no me acuerdo la otra</option>
          </select>
        </div>
        <div class="col-span-1 md:col-span-2 mb-6">
          <label for="estacion-fin" class="block text-white mb-2">Estación Fin</label>
          <select id="estacion-fin" v-model="estacionFin" class="w-full px-3 py-2 rounded  bg-white text-bg-gray-800" required>
            <option value="" disabled>Seleccione la estación</option>
            <option value="admin">Carolina</option>
            <option value="usuario">Ejido</option>
            <option value="admin">Universidades</option>
            <option value="admin">Gaspar De Villarruel</option>
            <option value="admin">Ya no me acuerdo la otra</option>
          </select>
        </div>
      </div>
      <button type="submit" class="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 focus:outline-none focus:bg-teal-600">Crear</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      bicicleta: '',
      hora: '',
      horaFin: '',
      estacionInicio: '',
      estacionFin: ''
    };
  },
  methods: {
    crearUsuario() {
      
      console.log({
        usuario: this.usuario,
        bicicleta: this.bicicleta,
        hora: this.hora,
        horaFin: this.horaFin,
        estacionInicio: this.estacionInicio,
        estacionFin: this.estacionFin
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


.bg-image {
  background-image: url('@/assets/fondo.png'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
}
.bg-opacity-75 {
  background-color: rgba(241, 241, 241, 0.278);
}
</style>