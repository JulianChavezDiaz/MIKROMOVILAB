<template>
  <div :class="['rounded-lg p-4 shadow-lg text-white', bgColor]">
    <div class="flex justify-between items-center">
      <h2 class="font-bold text-lg">{{ title }}</h2>
      <span class="text-sm">{{ percentage }}%</span>
    </div>
    <div class="text-2xl my-2">{{ count }}</div>
    <button class="bg-white text-black px-4 py-2 rounded" @click="viewDetail">View Detail</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    percentage: Number,
    count: Number,
    bgColor: String
  },
  methods: {
    viewDetail() {
      // Lógica para ver detalles de la tarjeta
      alert(`Viewing details for: ${this.title}`);
    }
  }
}
</script>

<style scoped>
</style>

  
