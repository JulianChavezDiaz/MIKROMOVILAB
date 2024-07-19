<template>
    <div class="w-[250px] h-full text-gray-400">
        <div class="h-[50px] bg-white flex justify-start items-center">
            <div class="px-[20px]">
                <span class="font-bold text-xl text-black">Mikro</span>
                <span class="font-bold text-xl text-gray-500">mobiLAB</span>
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800">
            <div class="flex flex-col justify-between h-full space-y-[10px]">
                <div class="flex flex-col justify-between">
                    <!-- Usuario -->
                    <div
                        class="px-[20px] w-full text-sm h-[100px] bg-gray-900 flex justify-start items-center text-white hover:bg-transparent">
                        <div class="avatar mt-3 flex flex-col justify-between">
                            <div class="w-10 h-10 rounded-full overflow-hidden">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <p>Abigail Cepeda</p>
                            <p class="text-sm text-gray-500">Admin</p>
                        </div>
                    </div>
                    <div class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium">
                        Navigation
                    </div>

                    <!-- Navegación -->
                    <RouterLink :to="{ name: 'Home' }"
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <!-- Icono de Home -->
                        </svg>
                        home
                    </RouterLink>
                    <RouterLink :to="{ name: 'Usuarios' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Usuarios
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Bicicletas' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Bicicletas
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Estaciones' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Estaciones
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Alquileres' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Alquileres
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Mantenimientos' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Mantenimientos
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Viajes' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Viajes
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Estadisticas' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Estadisticas
                        </button>
                    </RouterLink>
                    <RouterLink :to="{ name: 'Ubicaciones' }">
                        <button
                            class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="size-6">
                                <!-- Icono de Home -->
                            </svg>
                            Ubicacion
                        </button>
                    </RouterLink>
                    <!-- Más enlaces aquí -->
                </div>
                <div class="py-[10px]">
                    <RouterLink to="/Login"
                        class="inline-flex relative items-center py-[10px] px-[20px] w-full text-sm font-medium hover:bg-gray-700 active:bg-gray-900 focus:bg-gray-600 hover:text-white">
                        <!-- Icono aquí -->
                        Login/Registro
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>