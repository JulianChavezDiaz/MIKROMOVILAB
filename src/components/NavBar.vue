<template>
    <div class="w-full h-full">
        <div class="navbar h-[50px] bg-gray-800 flex justify-between items-center px-4">
            <!-- Texto MikroMovi-Lab -->
            <div class="text-lg font-bold text-teal-50 ml-4">
                MikromoviLab
            </div>
            
            <!-- Barra de búsqueda y avatar -->
            <div class="flex items-center space-x-4">
                <div class="form-control flex items-center relative tetx-white ">
                    <input type="text" placeholder="Buscar"
                        class="input input-bordered w-24 md:w-auto rounded-md bg-white pr-10 border border-black pl-2"  />
                    <button class="absolute right-2 text-white p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="size-5">
                            <path fill-rule="evenodd"
                                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class=" avatar flex items-center text-teal-50">
                    <div class=" w-8 h-8 rounded-full overflow-hidden">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    <span class="text-sm font-medium ml-2 mr-4">Abigail Cepeda</span>
                </div>
            </div>
        </div>
        <div id="Menu" class="menu h-[calc(100vh-50px)] bg-gray-300 overflow-auto">
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
/* Puedes ajustar el tamaño, color y otros estilos aquí */
</style>
