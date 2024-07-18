<template>
  <div class="flex w-screen h-screen overflow-hidden">
    <div class="w-3/4 h-full relative">
      <img class="w-full h-full object-cover" src="@/assets/log-fondo.jpg" alt="Fondo" />
      <div class="absolute bottom-0 left-0 bg-gradient-to-b from-black/0 to-black p-6">
        <div class="flex flex-col items-start" style="bottom: 20%">
          <div class="text-white text-4xl font-bold">Mikro <span class="font-light">Admin App</span></div>
          <div class="text-white/90 text-lg font-light">
            Como administrador de la aplicación Color Admin, usted utiliza la consola Color Admin para administrar la cuenta de su organización, como agregar nuevos usuarios y administrar la seguridad. configuración y active los servicios a los que desea que acceda su equipo.
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/4 h-full bg-gray-200 flex flex-col justify-center items-start p-14">
      <div class="w-full space-y-6">
        <div class="w-[360px] h-[62px] flex-col justify-start items-start inline-flex">
          <div class="w-[360px] h-[42px] relative">
            <div class="left-[88px] top-0 absolute flex-col justify-start items-start inline-flex">
              <div class="text-black text-[28px] font-bold font-['Open Sans'] leading-[42px]">Mikro</div>
            </div>
            <div class="w-[189px] h-[42px] left-[171px] top-0 absolute text-black text-[28px] font-light font-['Open Sans'] leading-[42px]">moviLAB</div>
          </div>
          <div class="self-stretch h-[20.75px] pb-[0.75px] opacity-50 flex-col justify-center items-center flex">
            <div class="text-black text-[13px] font-semibold font-['Open Sans'] leading-tight">Movilidad sustentable para Quito</div>
          </div>
        </div>
        <form class="w-full mt-10">
          <div class="space-y-4">
            <div class="flex space-x-4">
              <div class="flex-1">
                <label class="block text-xs text-gray-900 font-normal">Nombre <span class="text-rose-500">*</span></label>
                <input class="w-full px-3 py-2 mt-1 bg-white border border-gray-400 rounded text-xs font-semibold text-gray-900" type="text" placeholder="Nombre" />
              </div>
              <div class="flex-1">
                <label class="block text-xs text-gray-900 font-normal">Apellido <span class="text-rose-500">*</span></label>
                <input class="w-full px-3 py-2 mt-1 bg-white border border-gray-400 rounded text-xs font-semibold text-gray-900" type="text" placeholder="Apellido" />
              </div>
            </div>
            <div>
              <label class="block text-xs text-gray-900 font-normal">Email <span class="text-rose-500">*</span></label>
              <input class="w-full px-3 py-2 mt-1 bg-white border border-gray-400 rounded text-xs font-semibold text-gray-900" type="email" placeholder="Correo Electronico" />
            </div>
            <div>
              <label class="block text-xs text-gray-900 font-normal">Cedula <span class="text-rose-500">*</span></label>
              <input class="w-full px-3 py-2 mt-1 bg-white border border-gray-400 rounded text-xs font-semibold text-gray-900" type="text" placeholder="Cedula" />
            </div>
            <div>
              <label class="block text-xs text-gray-900 font-normal">Contraseña <span class="text-rose-500">*</span></label>
              <input class="w-full px-3 py-2 mt-1 bg-white border border-gray-400 rounded text-xs font-semibold text-gray-900" type="password" placeholder="Contraseña" />
            </div>
          </div>
          <div class="mt-4 flex items-start">
            <input type="checkbox" class="w-5 h-5 bg-white border border-gray-400 rounded" />
            <div class="ml-2 text-xs text-gray-900">
              By clicking Sign Up, you agree to our <a href="#" class="text-blue-500 underline">Terms</a> and that you have read our <a href="#" class="text-blue-500 underline">Data Policy</a>, including our <a href="#" class="text-blue-500 underline">Cookie Use</a>.
            </div>
          </div>
          <router-link to="/Login">
          <button type="submit" class="w-full mt-6 px-40 py-3.5 bg-teal-500 rounded-md text-white text-xs font-semibold">Registrarse</button></router-link>
          <router-link to="/Login"><div class="mt-4 text-xs text-gray-900">
            ¿Ya tienes una cuenta creada? <a href="#" class="text-blue-500 underline">Click aqui</a> para ingresar.
          </div></router-link>
        </form>

        <div class="w-full mt-10 h-px bg-gray-400 opacity-40"></div>
        <div class="mt-4 w-full text-center text-xs text-gray-500">© MikroMoviLab All Right Reserved 2024</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.font-open-sans {
  font-family: 'Open Sans', sans-serif;
}
</style>


