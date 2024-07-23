import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/components/AuthPage.vue";
import Session from "@/components/SessionPage.vue";
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
import HomeComponent from "@/pages/HomeComponent.vue";


const routes = [
  {
    name: 'session',
    component: Session,
    path: '/',
    children: [
      { name: 'Home', path: '/', component: HomeComponent },
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
  
  
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router;
