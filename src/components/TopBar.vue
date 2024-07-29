<template>
   <div class=" bg-gray-900">
    <div :class="{ 'w-[250px]': isMenuOpen, 'w-[60px]': !isMenuOpen }"
    class="h-full text-gray-400 transition-all duration-300">
    <!-- Botón para alternar el menú -->
    <button @click="toggleMenu" class="w-full h-[20px] bg-gray-800 flex justify-end ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M5 10h14v2H5zm0 4h14v2H5z" />
        </svg>
    </button>

    <!-- Contenedor de navegación -->
    <div v-if="isMenuOpen" class="h-[calc(100vh-50px)] bg-gray-800 overflow-auto">
        <div class="flex flex-col justify-between h-full space-y-[10px]">
            <div class="flex flex-col justify-between">
                <!-- Usuario -->
                <div class="px-[20px] w-full text-sm h-[100px] bg-gray-900 flex justify-start items-center text-white hover:bg-transparent">
                    <div class="avatar mt-3 flex flex-col justify-between">
                        <div class="w-10 h-10 rounded-full overflow-hidden">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                        <p>Abigail Cepeda</p>
                        <p class="text-sm text-gray-500">Admin</p>
                    </div>
                </div>
                <div class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium">
                  MENÚ
                </div>

                <!-- Navegación -->
                <RouterLink :to="{ name: 'Home' }"
                    class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>

                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'Usuarios' }">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>

                        Usuarios
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'Roles' }">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>

                        ´Roles
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'Bicicletas' }" class="button">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg class="w-[25px] h-[25px] fill-[#8e8e8e]" viewBox="0 0 640 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M400 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM56 384a72 72 0 1 1 144 0A72 72 0 1 1 56 384zm200 0A128 128 0 1 0 0 384a128 128 0 1 0 256 0zm184 0a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zm200 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z">
                            </path>
                        </svg>

                        Bicicletas
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'Estaciones' }">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                        </svg>

                        Estaciones
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'Alquileres' }">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>

                        Alquileres
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'Mantenimientos' }">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>

                        Mantenimientos
                    </button>
                </RouterLink>
                <RouterLink :to="{ name: 'Viajes' }">
                    <button
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>

                        Viajes
                    </button>
                </RouterLink>

            </div>
            <div class="py-[10px]">
                <RouterLink to="/Login"
                    class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                    </svg>

                    Cerrar Sesión
                </RouterLink>
            </div>
        </div>
    </div>
</div>
   </div>
</template>

<script>
export default {
    name: 'SidebarMenu',
    data() {
        return {
            isMenuOpen: true, // Inicialmente el menú está abierto
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
/* Estilo adicional para el botón y menú */
button {
    background: none;
    border: none;
    cursor: pointer;
}
</style>