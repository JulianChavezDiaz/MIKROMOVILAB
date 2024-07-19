import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/components/AuthPage.vue";
import Session from "@/components/SessionPage.vue";

import Home from "@/pages/Home.vue";
import UsuariosGestor from "@/pages/UsuariosGestor.vue";
import BicicletasGestor from "@/pages/BicicletasGestor.vue";
import EstacionesGestor from "@/pages/EstacionesGestor.vue";
import LoginComponent from "@/pages/LoginComponent.vue";
import AlquilerGestor from "@/pages/AlquilerGestor.vue";
import MantenimientoGestor from "@/pages/MantenimientoGestor.vue";
import ViajesGestor from "@/pages/ViajesGestor.vue";
import EstadisticasView from "@/pages/EstadisticasView.vue";
import UbicacionComponent from "@/pages/UbicacionComponent.vue";
import RegistroComponent from "@/pages/RegistroComponent.vue";


const routes = [
  {
    name: 'session',
    component: Session,
    path: '/',
    children: [
      { name: 'Home', path: '/', component: Home },
      { name: 'Usuarios', path: '/Usuarios', component: UsuariosGestor },
      { name: 'Bicicletas', path: '/Bicicletas', component: BicicletasGestor },
      { name: 'Estaciones', path: '/Estaciones', component: EstacionesGestor },
      { name: 'Mantenimientos', path: '/Mantenimientos', component: MantenimientoGestor },
      { name: 'Alquileres', path: '/Alquileres', component: AlquilerGestor },
      { name: 'Viajes', path: '/Viajes', component: ViajesGestor },
      { name: 'Estadisticas', path: '/Estadisticas', component: EstadisticasView },
      { name: 'Ubicaciones', path: '/Ubicaciones', component: UbicacionComponent }
    ]
  },
  {
    name: 'auth',
    component: Auth,
    path: '/',
    children: [
      { name: 'Registro', path: '/Registro', component: RegistroComponent },
      { name: 'Login', path: '/Login', component: LoginComponent }
    ]
  },
  
  //   name: 'Dashboard',
  //   path: '/',
  //   component: dashboard
  // },
  // {
  //   name: 'Home',
  //   path: '/home',
  //   component: ViajesComponent
  // },
  // {
  //   name: 'Usuarios',
  //   path: '/usuarios',
  //   component: UsuariosGestor
  // },

  // {
  //   name: 'Bicicletas',
  //   path: '/bicicletas',
  //   component: BicicletasGestor
  // },
  // {
  //   name: 'Mantenimiento',
  //   path: '/mantenimiento',
  //   component: MantenimientoGestor
  // },
  // {
  //   name: 'Alquiler',
  //   path: '/alquiler',
  //   component: alquiler
  // },
  // {
  //   name: 'Estadisticas',
  //   path: '/estadisticas',
  //   component: Estadisticas
  // },
  // {
  //   name: 'Viajes',
  //   path: '/viajes',
  //   component: viajes
  // },
  // {
  //   name: 'CrudPlantilla ',
  //   path: '/CrudPlantilla',
  //   component: CrudPlantilla
  // },
  // {

  //     name: 'Estaciones',
  //     path: '/estaciones',
  //     component: EstacionesGestor

  // },
  // {

  //     name: 'Login',
  //     path: '/Login',
  //     component: LoginComponent

  // },
  // {

  //     name: 'Registro',
  //     path: '/Registro',
  //     component: RegistroComponent

  // },

  // {

  //     name: 'ubicacion',
  //     path: '/Ubicacion',
  //     component: MapaUbicacion

  // },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router;
