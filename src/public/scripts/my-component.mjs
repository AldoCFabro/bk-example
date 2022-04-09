// my-component.js
export default {
    data() {
      return { title: 'Conexa App' }
    },
    template: `
    <div class="flex flex-col relative bg-slate-100">
    <div
      class=" grid grid-cols-1 md:grid-cols-2 text-white font-semibold h-14 w-full bg-teal-700 shadow-2xl fixed z-50">
      <div class="pl-6 md:pl-14 w-full h-full flex items-center">
        <a href="#" class="text-xl tracking-widest ">{{title}}</a>
      </div>
      <div id="menu" class="hidden md:flex md:pr-16 md:h-full">
        <ul class="flex space-x-4 justify-end w-full items-center">
          <li class=" px-4 hover-menu">
            <a href="#" class="hover:decoration-black">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </li>
          <li class=" px-4 hover-menu">
            <a href="#" class="hover:decoration-black">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
          </li>
          <li class="hover-menu px-4">
            <a href="#" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
          </li>
          <li class=" px-4 hover-menu">
            <a href="#" class="hover:decoration-black">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </a>
          </li>
        
        </ul>
      </div>
    </div>
    <div class="container p-2 mx-auto w-full h-full md:col-span-3 flex-col mt-16 max-w-md md:p-0 ">

      <div class="w-full border-white border-2  rounded-xl p-6 shadow-md my-4">
        <div class="flex w-full h-full items-center mb-3">
          <img src="/static/aldo_profile.jpeg" class="w-10 h-10 rounded-full align-middle " alt="">
          <p class=" ml-4 font-semibold text-xl"> Aldo Fabro</p>
        </div>

        <div class="flex mx-auto">
          <img src="/static/uritorco.jpeg" class="shadow-2xl object-cover">
        </div>
        <div class="mt-4 text-teal-900 h-48  overflow-hidden  ">
          <P>
            Uritorco en quichua significa literalmente Cerro de los Loros, ya que estaba plagado de los mismos, hasta
            que
            fueron durante el siglo XX sistemáticamente exterminados debido a que eran considerados "plaga" por los
            pobladores al ser muy dañinos para las cosechas.
          </P>
        </div>
        <div class="action flex justify-end mt-5">
          <button class="btn-primary">More..</button>
        </div>
      </div>

      <div class="w-full border-white border-2  rounded-xl p-6 shadow-md my-4 ">
        <div class="flex w-full h-full items-center mb-3">
          <img
            src="https://yt3.ggpht.com/pOn3gwi6YpwWC2nFy_o51FETMSSSoYoUOE075Xh0g3I_fX_nK4k76FwBNPia4ae0X_yYMW29=s88-c-k-c0x00ffffff-no-rj"
            class="w-10 h-10 rounded-full align-middle " alt="">
          <p class="ml-4 font-semibold text-xl"> Pablo Imhoff</p>
        </div>

        <div class="">
          <div class="aspect-w-1 aspect-h-1">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XxxAiGMoBUQ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>

        </div>

        <div class="mt-4 text-teal-900 h-48  overflow-hidden  ">
          <P>
            Científico, naturalista y conservacionista. Político, botánico, explorador y geógrafo. Palabras que definen
            la vida y obra de Francisco Pascasio Moreno. Un documental para adentrarse en el legado invaluable de Moreno
            para la historia argentina. Una vida pródiga en acciones por la educación, la ciencia y la nación. Desde
            dirigir su primer museo a los 16 años hasta emprender cinco expediciones al sur. Donó sus tierras para crear
            el Parque Nacional Nahuel Huapi, el primero de Argentina y Sudamérica.
            Con la participación destacada del actor Boy Olmi, especialistas de distintas ramas en las que Moreno se
            destacó reconstruyen su vida, para mantener vivo su legado.
          </P>
        </div>
        <div class="action flex justify-end mt-5">
          <button class="btn-primary">More..</button>
        </div>
      </div>
      <div class="w-full border-white border-2  rounded-xl p-6 shadow-md my-4 last:mb-20">
        <div class="flex w-full h-full items-center mb-3">
          <img src="https://yt3.ggpht.com/ytc/AKedOLQwCYSKJE46FBgi-E4cDT7ewH-ViOQ1pngBhXd5=s88-c-k-c0x00ffffff-no-rj"
            class="w-10 h-10 rounded-full align-middle " alt="">
          <p class="ml-4 font-semibold text-xl"> Estaban Ruiz</p>
        </div>

        <div class="">
          <div class="aspect-w-1 aspect-h-1">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rmKKzcGNBRM"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>

        </div>

        <div class="mt-4 text-teal-900 h-48  overflow-hidden  ">
          <P>
            El Chaltén es una villa del Parque Nacional Los Glaciares, en la provincia argentina de Santa Cruz. Es una
            vía de acceso a los senderos que rodean las cimas del cerro Torre y el Monte Fitz Roy al noroeste. Cerca de
            Fitz Roy hay un sendero que llega al mirador Laguna de los Tres. Justo al noroeste de la aldea está la
            laguna Capri con vista a las montañas. Una de las calles principales de la villa es San Martín, bordeada de
            tiendas
          </P>
        </div>
        <div class="action flex justify-end mt-5">
          <button class="btn-primary">More..</button>
        </div>
      </div>

    </div>

    <div class="flex bg-slate-600 text-white w-full font-semibold h-14 md:hidden fixed bottom-0 left-0">
      <ul class="flex space-x-4 justify-center w-full items-center">
        <li class=" px-4 align-middle hover-menu">
          <a href="#" id="home" class=" hover:decoration-black">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
        </li>
        <li class="hover-menu px-4  align-middle">
          <a href="#" class="" id="search">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
        </li>
        <li class="hover-menu px-4">
          <a href="#" id="profile">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>
        </li>
        <li class="hover-menu px-4">
          <a href="#" id="dark-mode">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>

          </a>
        </li>
      </ul>
    </div>
  </div>

    `
  }