import { createRouter, createWebHistory } from "vue-router";
import dashboard from '@/pages/master/dashboard.vue';
import home from '@/pages/HomeGestor.vue';
import usuarios from "@/pages/UsuariosGestor.vue";
import bicicletas from "@/pages/BicicletasGestor.vue";
import mantenimiento from "@/pages/MantenimientoGestor.vue";
import alquiler from "@/pages/AlquilerGestor.vue";
import estadisticas from "@/pages/estadisticas.vue";
import viajes from "@/pages/ViajesGestor.vue";
import CrudPlantilla from "@/pages/CrudPlantilla.vue";
import EstacionesGestor from "@/pages/EstacionesGestor.vue";
const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard
  },
  {
    name: 'Home',
    path: '/home',
    component: home
  },
  {
    name: 'Usuarios',
    path: '/usuarios',
    component: usuarios
  },

 
  {
    name: 'Bicicletas',
    path: '/bicicletas',
    component: bicicletas
  },
  {
    name: 'Mantenimiento',
    path: '/mantenimiento',
    component: mantenimiento
  },
  {
    name: 'Alquiler',
    path: '/alquiler',
    component: alquiler
  },
  {
    name: 'Estadisticas',
    path: '/estadisticas',
    component: estadisticas
  },
  {
    name: 'V',
    path: '/estadisticas',
    component: estadisticas
  },
  {
    name: 'Viajes',
    path: '/viajes',
    component: viajes
  },
  {
    name: 'CrudPlantilla ',
    path: '/CrudPlantilla',
    component: CrudPlantilla
  },
  {
    
      name: 'Estaciones',
      path: '/estaciones',
      component: EstacionesGestor
    
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
