import { createRouter, createWebHistory } from "vue-router";
import dashboard from '@/pages/master/dashboard.vue';
import home from '@/pages/home.vue';
import alquiler from "@/pages/AlquilerGestor.vue";
import estadisticas from "@/pages/estadisticas.vue";
import viajes from "@/pages/ViajesUs.vue";
import CrudPlantilla from "@/pages/CrudPlantilla.vue";
import EstacionesGestor from "@/pages/EstacionesGestor.vue";
import MantenimientoGestor from "@/pages/MantenimientoGestor.vue";
import UsuariosGestor from "@/pages/UsuariosGestor.vue";
import BicicletasGestor from "@/pages/BicicletasGestor.vue";
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
    component: UsuariosGestor
  },
 
  {
    name: 'Bicicletas',
    path: '/bicicletas',
    component: BicicletasGestor
  },
  {
    name: 'Mantenimiento',
    path: '/mantenimiento',
    component: MantenimientoGestor
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
