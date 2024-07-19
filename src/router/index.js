import { createRouter, createWebHistory } from "vue-router";
import dashboard from '@/pages/master/dashboard.vue';
import ViajesComponent from '@/pages/ViajesComponent.vue';
import alquiler from "@/pages/AlquilerGestor.vue";
import Estadisticas from "@/pages/Estadisticas.vue";
import viajes from "@/pages/ViajesUs.vue";
import CrudPlantilla from "@/pages/CrudPlantilla.vue";
import EstacionesGestor from "@/pages/EstacionesGestor.vue";
import MantenimientoGestor from "@/pages/MantenimientoGestor.vue";
import UsuariosGestor from "@/pages/UsuariosGestor.vue";
import BicicletasGestor from "@/pages/BicicletasGestor.vue";
import LoginComponent from "@/pages/LoginComponent.vue";
import RegistroComponent from "@/pages/RegistroComponent.vue";
import MapaUbicacion from "@/pages/MapaUbicacion.vue";
const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard
  },
  {
    name: 'Home',
    path: '/home',
    component: ViajesComponent
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
    component: Estadisticas
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
  {
    
      name: 'Login',
      path: '/Login',
      component: LoginComponent
    
  },
  {
    
      name: 'Registro',
      path: '/Registro',
      component: RegistroComponent
    
  },
  
  {
    
      name: 'ubicacion',
      path: '/Ubicacion',
      component: MapaUbicacion
    
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
