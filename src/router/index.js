import { createRouter, createWebHistory } from "vue-router";
import Auth from "@/components/AuthPage.vue";
import Session from "@/components/SessionPage.vue";
import UsuariosPages from "@/pages/UsuarioPages.vue";
import RolesPages from "@/pages/RolesPages.vue";
import BicicletasPages from "@/pages/BicicletasPages.vue";
import EstacionesPages from "@/pages/EstacionesPages.vue";
import LoginPages from "@/pages/LoginPages.vue";
import AlquilerPages from "@/pages/AlquilerPages.vue";
import MantenimientoPages from "@/pages/MantenimeintoPages.vue";
import ViajesPages from "@/pages/ViajesPages.vue";
import UbicacionPages from "@/pages/UbicacionPages.vue";
import RegistroPages from "@/pages/RegistroPages.vue";
import HomePages from "@/pages/HomePages.vue";


const routes = [
  {
    name: 'session',
    component: Session,
    path: '/',
    children: [
      { name: 'Home', path: '/', component: HomePages},
      { name: 'Usuarios', path: '/Usuarios', component: UsuariosPages},
      { name: 'Roles', path: '/Roles', component: RolesPages},
      { name: 'Bicicletas', path: '/Bicicletas', component: BicicletasPages},
      { name: 'Estaciones', path: '/Estaciones', component: EstacionesPages},
      { name: 'Mantenimientos', path: '/Mantenimientos', component: MantenimientoPages },
      { name: 'Alquileres', path: '/Alquileres', component: AlquilerPages },
      { name: 'Viajes', path: '/Viajes', component: ViajesPages },
      { name: 'Ubicaciones', path: '/Ubicaciones', component: UbicacionPages }
    ]
  },
  {
    name: 'auth',
    component: Auth,
    path: '/',
    children: [
      { name: 'Registro', path: '/Registro', component: RegistroPages },
      { name: 'Login', path: '/Login', component: LoginPages }
    ]
  },
  
  
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});

export default router;
