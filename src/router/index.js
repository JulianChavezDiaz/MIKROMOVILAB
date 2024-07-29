import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/components/AuthPage.vue";
import Session from "@/components/SessionPage.vue";
import UsuariosGestor from "@/pages/UsuarioPages.vue";
import BicicletasGestor from "@/pages/BicicletasPages.vue";
import EstacionesGestor from "@/pages/EstacionesPages.vue";
import LoginComponent from "@/pages/LoginPages.vue";
import AlquilerGestor from "@/pages/AlquilerPages.vue";
import MantenimientoGestor from "@/pages/MantenimeintoPages.vue";
import ViajesGestor from "@/pages/ViajesPages.vue";
import UbicacionComponent from "@/pages/UbicacionPages.vue";
import RegistroComponent from "@/pages/RegistroPages.vue";
import HomeComponent from "@/pages/HomePages.vue";


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
