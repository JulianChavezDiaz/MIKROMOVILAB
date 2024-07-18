<template>
    <div class="min-h-screen bg-gray-200 p-4">
      <div class="max-w-7xl mx-auto bg-white shadow-md rounded-lg">
        <header class="bg-gray-800 text-white p-4 rounded-t-lg flex justify-between items-center">
          <h1 class="text-xl font-bold">Viajes Actuales</h1>
          <input type="text" placeholder="Buscar..." class="border rounded-lg p-2" />
        </header>
        <div class="p-4 flex">
          <div class="flex-1">
            <div class="overflow-x-auto">
              <table class="min-w-full bg-white">
                <thead>
                  <tr>
                    <th class="px-4 py-2 border">#</th>
                    <th class="px-4 py-2 border">Usuarios</th>
                    <th class="px-4 py-2 border">Estación Inicio</th>
                    <th class="px-4 py-2 border">Estado</th>
                    <th class="px-4 py-2 border">Id Bicicleta</th>
                    <th class="px-4 py-2 border">Hora Inicio</th>
                    <th class="px-4 py-2 border">Hora Fin</th>
                    <th class="px-4 py-2 border">Tiempo Total</th>
                    <th class="px-4 py-2 border">Estación Fin</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(trip, index) in paginatedTrips" :key="trip.id">
                    <td class="px-4 py-2 border">{{ index + 1 }}</td>
                    <td class="px-4 py-2 border">
                      <div class="flex items-center">
                        <img :src="trip.userImage" alt="User Image" class="w-8 h-8 rounded-full mr-2">
                        <span>{{ trip.userName }}</span>
                      </div>
                    </td>
                    <td class="px-4 py-2 border">{{ trip.startStation }}</td>
                    <td class="px-4 py-2 border">{{ trip.status }}</td>
                    <td class="px-4 py-2 border">{{ trip.bikeId }}</td>
                    <td class="px-4 py-2 border">{{ trip.startTime }}</td>
                    <td class="px-4 py-2 border">{{ trip.endTime }}</td>
                    <td class="px-4 py-2 border">{{ trip.totalTime }}</td>
                    <td class="px-4 py-2 border">{{ trip.endStation }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex justify-end mt-4">
              <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1"
                class="px-3 py-1 border rounded-l-lg">«</button>
              <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                :class="['px-3 py-1 border', { 'bg-blue-500 text-white': page === currentPage }]" class="cursor-pointer">
                {{ page }}
              </button>
              <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="px-3 py-1 border rounded-r-lg">»</button>
            </div>
          </div>
          <div class="ml-4 w-64">
            <div v-for="stat in statistics" :key="stat.title" :class="['p-4 rounded-lg mb-4 text-white', stat.color]">
              <div class="flex justify-between items-center">
                <h2 class="text-xl font-bold">{{ stat.title }}</h2>
                <span>{{ stat.percentage }}%</span>
              </div>
              <p class="mt-2">{{ stat.value }}</p>
              <button class="mt-4 bg-white text-black px-4 py-2 rounded-lg">View Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        trips: [
          { id: 1, userImage: 'path/to/image1.jpg', userName: 'Pedro Perez', startStation: 'Iñaquito', status: 'Terminado', bikeId: 401, startTime: '12:30', endTime: '12:30', totalTime: '00:30:20', endStation: 'Carolina' },
          { id: 2, userImage: 'path/to/image2.jpg', userName: 'Pedro Perez', startStation: 'Carolina', status: 'En Curso', bikeId: 531, startTime: '12:30', endTime: '12:30', totalTime: '00:30:20', endStation: '' },
        ],
        currentPage: 1,
        tripsPerPage: 5,
        statistics: [
          { title: 'VIAJES TOTALES', value: 10, percentage: 100, color: 'bg-blue-500' },
          { title: 'VIAJES EN CURSO', value: 6, percentage: 60, color: 'bg-orange-500' },
          { title: 'VIAJES EN RIESGO', value: 1, percentage: 10, color: 'bg-red-500' },
          { title: 'VIAJES TERMINADOS', value: 3, percentage: 30, color: 'bg-teal-500' }
        ]
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.trips.length / this.tripsPerPage);
      },
      paginatedTrips() {
        const start = (this.currentPage - 1) * this.tripsPerPage;
        const end = start + this.tripsPerPage;
        return this.trips.slice(start, end);
      }
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      }
    }
  };
  </script>
  
  <style scoped></style>