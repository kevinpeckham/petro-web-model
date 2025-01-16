<script lang="ts">
  const icons: {[key:string]:string} = {
		classroom_: `<svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162"><path d="M33.84 109.14v28.93c0 3.28 5.1 3.29 5.1 0v-28.93c0-3.28-5.1-3.29-5.1 0h0zm45.94-35.09c-1.46-3.03-4.83-4.98-8.18-4.79-3.47.2-6.42 2.68-9.28 4.43l-.58.36c-1.79-1.31-3.57-2.64-5.46-3.76-1.16-.69-2.36-1.28-3.6-1.81-1.53-.65-3.3-1.51-4.99-1.47-2.17.05-4.09.89-5.98 1.87-1.09.56-2.16 1.21-3.29 1.7-1.64.72-2.92-.02-4.34-.77-1.34-.71-2.67-1.5-4.09-2.06-1.99-.78-4.22-.86-6.33-.74-5.07.3-9.79 3.12-12.26 7.6-1.49 2.71-1.86 5.61-1.86 8.64v17.76c0 2.85-.22 5.74 1.47 8.23 1.7 2.51 4.42 3.93 7.44 4.01.47.01.94 0 1.42 0v24.78c0 3.28 5.1 3.29 5.1 0v-26.92c.07-.38.07-.77 0-1.15V85.84c0-3.28-5.1-3.29-5.1 0v21.99h-1.06c-1.33 0-2.48-.4-3.23-1.46-.89-1.28-.65-2.97-.65-4.68v-17.1c0-1.74-.12-3.56.29-5.15.95-3.64 4.08-6.47 7.74-7 1.48-.21 3.36-.23 4.78.2 1.19.36 2.3 1.11 3.39 1.69 1.59.85 3.12 1.68 4.96 1.87 2.15.23 4.02-.46 5.88-1.43l3.47-1.8c1.28-.62 2.24-.66 3.56-.2s2.58 1.04 3.8 1.71c2.62 1.45 5.01 3.36 7.45 5.09.75.54 1.96.47 2.73 0l6.15-3.78c1.17-.72 1.99-1.32 3.29-1.19.8.09 1.77.62 2.35 1.49 1 1.51.58 3.39-.9 4.49-1.06.79-2.21 1.47-3.3 2.2l-4.82 3.21c-1.19.79-2.37 1.72-3.82 1.95-1.96.31-3.55-.58-5.22-1.42-1.69-.85-3.64-2.18-5.59-2.07-2.68.14-4.47 2.39-4.56 4.96-.02.56 0 1.12 0 1.68l-.04 7.7-.12 23.53-.08 15.68c-.02 3.48 5.38 3.48 5.4 0l.07-13.6.12-24.37.04-8.51c0-.41.05-.87.05-1.32l3.86 1.93c3.47 1.66 7.47 1.69 10.83-.3 2.77-1.65 5.4-3.59 8.08-5.37 1.23-.82 2.66-1.61 3.64-2.73 2.38-2.71 2.92-6.48 1.35-9.74zM51.16 89.84c-.11 0-.18-.1 0 0h0zM36.79 66.81c-7.33 0-13.3-5.97-13.3-13.3s5.97-13.3 13.3-13.3 13.3 5.97 13.3 13.3-5.97 13.3-13.3 13.3zm0-21.6a8.31 8.31 0 0 0-8.3 8.3 8.31 8.31 0 0 0 8.3 8.3 8.31 8.31 0 0 0 8.3-8.3 8.31 8.31 0 0 0-8.3-8.3zm105.34 65.76H60.89a2.5 2.5 0 1 1 0-5h81.24c3.15 0 5.72-2.56 5.72-5.72V30.32c0-3.15-2.56-5.72-5.72-5.72H34.58c-3.15 0-5.72 2.57-5.72 5.72v4.91a2.5 2.5 0 1 1-5 0v-4.91c0-5.91 4.81-10.72 10.72-10.72h107.55c5.91 0 10.72 4.81 10.72 10.72v69.93c0 5.91-4.81 10.72-10.72 10.72z"/></svg>`,
		classroom: `<svg viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="m1125 487.5h-1050c-20.699 0-37.5 16.801-37.5 37.5s16.801 37.5 37.5 37.5h37.5v487.5c0 20.699 16.801 37.5 37.5 37.5s37.5-16.801 37.5-37.5v-75h825v75c0 20.699 16.801 37.5 37.5 37.5s37.5-16.801 37.5-37.5v-487.5h37.5c20.699 0 37.5-16.801 37.5-37.5s-16.801-37.5-37.5-37.5zm-712.5 525h-75v37.5c0 20.699 16.801 37.5 37.5 37.5s37.5-16.801 37.5-37.5zm450 0h-75v37.5c0 20.699 16.801 37.5 37.5 37.5s37.5-16.801 37.5-37.5zm150-450v337.5h-825v-337.5zm-675-112.5v-150c0-49.727 19.762-97.426 54.898-132.6 35.176-35.137 82.875-54.898 132.6-54.898h150c49.727 0 97.426 19.762 132.6 54.898 35.137 35.176 54.898 82.875 54.898 132.6v150h-75v-150c0-29.852-11.852-58.461-32.961-79.539-21.074-21.113-49.688-32.961-79.539-32.961h-150c-29.852 0-58.461 11.852-79.539 32.961-21.113 21.074-32.961 49.688-32.961 79.539v150z" fill-rule="evenodd"/></svg>`,
		elearning_: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162"><path d="M128.15 51.21L82.84 36.92c-.54-.17-1.11-.17-1.65 0L35.88 51.21a2.75 2.75 0 0 0-1.92 2.62 2.45 2.45 0 0 0 .02.27 2.59 2.59 0 0 0-.08.63v18.72a2.75 2.75 0 1 0 5.5 0V57.56l7.58 2.39v26.52a2.75 2.75 0 0 0 2.75 2.75h64.6a2.75 2.75 0 0 0 2.75-2.75V59.95l11.09-3.5a2.75 2.75 0 0 0 0-5.24zm-16.58 32.5H52.46V61.67l28.73 9.06c.27.08.55.13.83.13s.56-.04.83-.13l28.73-9.06v22.04zM82.01 65.24L45.83 53.83l36.18-11.41 36.18 11.41-36.18 11.41zm58.32-40.78H21.84c-7 0-12.7 5.7-12.7 12.7v65c0 7 5.7 12.7 12.7 12.7h41.88L55.5 131.2h-9.84a2.75 2.75 0 1 0 0 5.5h65.49a2.75 2.75 0 1 0 0-5.5h-8.47l-8.22-16.34h45.86c7 0 12.7-5.7 12.7-12.7v-65c0-7-5.7-12.7-12.7-12.7zM21.84 29.95h118.49a7.22 7.22 0 0 1 7.21 7.21v59.39H14.64V37.16a7.22 7.22 0 0 1 7.21-7.21zm74.7 101.24H61.65l8.22-16.34h18.44l8.22 16.34zm43.79-21.83H21.84a7.22 7.22 0 0 1-7.21-7.21v-.44h132.9v.44a7.22 7.22 0 0 1-7.21 7.21z"/></svg>`,
		elearning: `<svg fill="white" viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg"><path d="m892.61 787.5c-54.789 0-105.94 27.375-136.31 72.938v0.039062c-16.461 24.676-44.211 39.523-73.914 39.523h-164.77c-29.699 0-57.449-14.852-73.914-39.523v-0.039062c-30.375-45.562-81.523-72.938-136.31-72.938h-232.39c-20.699 0-37.5 16.801-37.5 37.5v112.5c0 49.727 19.762 97.426 54.898 132.6 35.176 35.137 82.875 54.898 132.6 54.898h750c49.727 0 97.426-19.762 132.6-54.898 35.137-35.176 54.898-82.875 54.898-132.6v-112.5c0-20.699-16.801-37.5-37.5-37.5zm0 75h194.89v75c0 29.852-11.852 58.461-32.961 79.539-21.074 21.113-49.688 32.961-79.539 32.961h-750c-29.852 0-58.461-11.852-79.539-32.961-21.113-21.074-32.961-49.688-32.961-79.539v-75h194.89c29.699 0 57.449 14.852 73.914 39.523v0.039062c30.375 45.562 81.523 72.938 136.31 72.938h164.77c54.789 0 105.94-27.375 136.31-72.938v-0.039062c16.461-24.676 44.211-39.523 73.914-39.523zm-780.11-112.5v-487.5c0-49.727 19.762-97.426 54.898-132.6 35.176-35.137 82.875-54.898 132.6-54.898h600c49.727 0 97.426 19.762 132.6 54.898 35.137 35.176 54.898 82.875 54.898 132.6v487.5h-75v-487.5c0-29.852-11.852-58.461-32.961-79.539-21.074-21.113-49.688-32.961-79.539-32.961h-600c-29.852 0-58.461 11.852-79.539 32.961-21.113 21.074-32.961 49.688-32.961 79.539v487.5zm408.52-456.41c-23.25-11.625-50.852-10.387-72.938 3.3008-22.125 13.648-35.586 37.801-35.586 63.789v253.65c0 25.988 13.461 50.137 35.586 63.789 22.086 13.688 49.688 14.926 72.938 3.3008l253.65-126.82c25.426-12.711 41.477-38.664 41.477-67.086 0-28.426-16.051-54.375-41.477-67.086l-253.65-126.82zm-33.523 67.086 253.65 126.82-253.65 126.82z" fill-rule="evenodd"/></svg>`,
		virtual_: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162"><path d="M147.69 107.79h-2.62V41.71a11.23 11.23 0 0 0-11.22-11.21H26.42A11.23 11.23 0 0 0 15.2 41.71v66.08h-.71c-3.02 0-5.48 2.45-5.48 5.47v1.16c0 8.94 7.28 16.21 16.22 16.21h111.7c8.94 0 16.22-7.27 16.22-16.21v-1.16c0-3.02-2.45-5.47-5.47-5.47zm-129.74 5.5h124.36c.07 0 .14-.02.2-.02h5.13v1.16c0 5.91-4.81 10.72-10.72 10.72H25.24c-5.91 0-10.72-4.81-10.72-10.72v-1.14h3.43zm121.61-5.5H70.03l.05-9.55c.18-.05.35-.08.26-.08.09 0 .18-.01.28-.01 1.65-.05 3.31 0 4.97 0h6.87c1.76 0 3.57.11 5.26-.48 3.74-1.31 6.46-5.05 6.14-9.08-.32-3.94-3.11-7.55-7.1-8.31-1.42-.27-2.84-.21-4.28-.21h-6.69-6.84c-1.18 0-2.37-.07-3.54.11-2.29.36-4.25 1.15-6.29 2.2-1.82.94-3.58 2.26-5.66 1.24-1.98-.97-3.84-2.25-5.95-2.95-2.86-.94-6.79-.76-9.61.19-6.34 2.14-10.23 7.98-10.24 14.58v12.18.16h-6.95V41.71A5.72 5.72 0 0 1 26.43 36h107.43c3.15 0 5.72 2.56 5.72 5.71v66.08zM33.07 94.26c.15-2.66 1.67-5.35 3.82-6.9 2.2-1.59 4.46-1.86 7.13-1.82 2.2.04 4.06 1.34 5.94 2.34 3.07 1.63 6.13 2.07 9.35.48.82-.4 1.62-.84 2.42-1.26l1.31-.68c.08-.04.41-.2.47-.24.6-.24 1.25-.38 1.88-.52.35-.08.82-.09 1.2-.18h.38 5.26l12.02-.01c1.65 0 3.02.43 3.82 1.95 1.14 2.16-.2 4.95-2.75 5.31-.98.14-2.43.02-3.56.02h-6.88c-3.69 0-9.9-.61-10.19 4.62-.19 3.46-.05 6.97-.05 10.43H43.08v-8.77c0-1.33-1.17-2.61-2.55-2.55s-2.55 1.12-2.55 2.55v8.77h-4.93v-9.57c0-1.32-.06-2.65.02-3.96zm37.03 3.43v-.16c0-.03.02-.13 0-.15.09.08.07.19 0 .31zm-.39.64c.06-.01.09-.01 0 0h0zm-.11.01c-.06 0-.04 0 0-.01zm55.76-53.57H35.43c-3.37 0-6.12 2.71-6.12 6.05v25.19c0 1.51 1.23 2.75 2.75 2.75a2.75 2.75 0 0 0 2.75-2.75V50.82c0-.31.28-.56.62-.56h89.93c.34 0 .62.25.62.56v42.79c0 .3-.28.55-.62.55H99.09a2.75 2.75 0 1 0 0 5.5h26.27c3.38 0 6.12-2.71 6.12-6.04V50.83c0-3.33-2.75-6.05-6.12-6.05zM54.9 53.34c-7.33 0-13.3 5.97-13.3 13.3s5.97 13.3 13.3 13.3 13.3-5.97 13.3-13.3-5.97-13.3-13.3-13.3zm0 21.6a8.31 8.31 0 0 1-8.3-8.3 8.31 8.31 0 0 1 8.3-8.3 8.31 8.31 0 0 1 8.3 8.3 8.31 8.31 0 0 1-8.3 8.3z"/></svg>`,
		virtual: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200" fill="#000" fill-rule="nonzero"><path d="M752.786 1056h76.143c21.035 0 38.071 17.005 38.071 38s-17.037 38-38.071 38H372.071c-21.035 0-38.071-17.005-38.071-38s17.037-38 38.071-38h76.143v-76h76.143v76h152.286v-76h76.143v76zM1096 827.727l-1.133-609.455a38.14 38.14 0 0 0-11.135-26.949c-7.138-7.142-16.845-11.142-26.932-11.142H901.996V104H1056.8a114.13 114.13 0 0 1 80.749 33.472c21.413 21.426 33.451 50.471 33.451 80.8v609.455c0 30.33-12.038 59.374-33.451 80.8A114.13 114.13 0 0 1 1056.8 942H143.2a114.13 114.13 0 0 1-80.749-33.472C41.038 887.101 29 858.057 29 827.727V218.273c0-30.33 12.038-59.374 33.451-80.8A114.13 114.13 0 0 1 143.2 104h758.796v76.182H143.2c-10.088 0-19.795 4-26.932 11.142s-11.135 16.855-11.135 26.949L106 827.727h990z"/><path d="M1096 832c0 10.07-3.998 19.76-11.138 26.885S1068.013 870 1057.923 870H144.077c-10.09 0-19.8-3.99-26.939-11.115S106 842.069 106 832h990zM600.745 248c121.506 0 220.17 98.588 220.17 220 0 65.657-28.829 124.712-74.582 165h19.539c43.827 0 85.797 17.393 116.759 48.331S931 754.207 931 798H820.915c0-14.575-5.779-51.485-16.1-61.797s-24.357-16.088-38.942-16.088H435.618c-14.586 0-28.622 5.775-38.942 16.088s-16.1 47.222-16.1 61.797H268c0-43.793 19.897-85.731 50.859-116.669S391.791 633 435.618 633h19.539c-45.754-40.288-74.582-99.343-74.582-165 0-121.412 98.664-220 220.17-220zm-.245 84C523.456 332 461 394.456 461 471.5S523.456 611 600.5 611 740 548.544 740 471.5 677.544 332 600.5 332z"/></svg>`
	}

	const iconLabels: {[key:string]:string} = {
		classroom: "Classroom",
		elearning: "eLearning",
		virtual: "Virtual"
	}
</script>
<!-- mock nav-->
<div class="u-max-h-[150px] u-w-full u-page-x-padding u-pt-6">
  <!-- top row -->
  <div class="u-flex u-gap-8 u-max-h-[50px] u-w-full">
    <img class="u-w-[185px] u-h-[50px]" src="/static/images/PetroSkills-Logo.png" width="185" height="50" loading="eager" alt="Petroskills Logo" draggable="false">
    <div class="u-outline-blue-900/10 u-flex u-outline u-rounded-md u-w-auto u-flex-grow u-py-1 u-items-center u-px-4">
      Find courses, online learning and more...
    </div>
    <div class="u-flex u-items-center u-pl-8">
      [cart]
    </div>
  </div>
  <!-- bottom row-->
  <div class="u-flex u-gap-8 u-min-h-[50px] u-w-full u-pt-8 u-pb-6 u-items-center u-text-berkeleyBlue">
    <div class="u-font-500 u-opacity-90">Find Training</div>
    {#each ["About Us", "Products & Solutions", "Resources"] as item}
    <div class="u-font-500 u-opacity-90">{item}</div>
    {/each}
  </div>
</div>

<!-- header -->
<header class="u-grid u-grid-cols-[1fr_400px] u-h-[228px] u-bg-berkeleyBlue u-w-full u-text-white u-page-x-padding u-py-8 u-place-content-start">
  <h1 class="u-text-white u-text-32 u-leading-snug">Basic Petroleum Geology</h1>
  <div class="u-justify-self-end u-text-13 opacity-90">Home &nbsp;⟩&nbsp; Products &nbsp;⟩&nbsp; eLearning</div>
  <p class="opacity-80 text-18">eLearning &nbsp;|&nbsp; In-Classroom</p>
</header>

<!-- main -->
 <main class="u-page-x-padding u-bg-slate-50 u-w-full u-flex">
  <div class="u-grid u-grid-cols-5 u-page-x-padding u-main-y-padding u-bg-white u-shadow-xl u-rounded-xl -u-translate-y-20">
    <article class="u-col-span-3 u-text-16 u-max-w-article">

      <section class="u-mb-8">
        <h2 class="u-text-26">About the Course</h2>
        <p class="u-text-berkeley-blue u-opacity-90">What is Basic Petroleum Geology? For all practical purposes it closely resembles the freshman level course that a non-science major at a university would take to satisfy the science requirement. Presentation is oriented toward topics of interest to the petroleum industry. While high school chemistry and physics might help in understanding a very few selected topics, the course is designed for those with no technical training (and those who studiously avoided science in school). Primary objectives of the course are to broaden your geological vocabulary, explain selected geological principles and processes, and describe how certain petroleum reservoirs and source rocks are formed.</p>
    </section>

    <!-- <div class="u-mb-8">
      <h3 class="u-text-22">Target Audience</h3>
      <p>Petroleum industry personnel in need of basic geological training, including engineering, geophysical, technical support, and administrative personnel.</p>
    </div> -->

    <div class="u-mb-8">
    <h3 class="u-text-22 mb-3">You Will Learn</h3>
    <div class="u-bg-blue-900/10 u-rounded-lg u-gap-4 u-mb-4 u-relative">
      <!-- tab controls -->
       <div class="u-bg-berkeleyBlue u-rounded-t-lg u-flex u-gap-6 u-mb-4 u-py-2 u-px-5">
        <button class="u-flex u-gap-3 u-items-center u-bg-transparent u-border-transparent u-text-white u-rounded-md u-py-2 u-px-0 u-text-16 u-underline u-font-600 u-underline-offset-4">
          <div class="u-h-6 u-w-6 u-flex">{@html icons["elearning"]}</div>eLearning Format</button>
        <button class="u-bg-transparent u-border-transparent u-text-white u-rounded-md u-py-2 u-px-0 u-text-16 u-underline u-font-400 u-decoration-white/0 u-underline-offset-4">In-Classroom Format</button>
      </div>


      <div class="u-px-4 u-pt-3 u-pb-6 u-max-h-[360px] u-overflow-scroll">

       <!-- content 1-->
      <div data-tab="1">
        <h4 class="u-text-17 u-font-600">In this eLearning Course You Will Learn</h4>
          <ul data-tab="1" class="u-pl-6 u-grid u-grid-cols-1 u-gap-2">
            <li>About plate tectonics and petroleum</li>
            <li>About geological time and history</li>
            <li>The fundamentals of rock formation and deformation</li>
            <li>The essentials of various depositional environments and the reservoirs created by them</li>
            <li>The distribution of porosity and permeability in reservoirs produced in different depositional environments</li>
            <li>How rock characteristics are related to modern geological processes and applied to the ancient record</li>
            <li>About petroleum reservoir and source rocks</li>
            <li>Of petroleum origin, migration, and trapping</li>
            <li>How to correlate electric logs and recognize depositional environments on logs</li>
            <li> How to make contour maps and cross sections</li>
            <li>Elements of geophysics and exploration</li>
            <li>How geology bears directly on engineering practices</li>
          </ul>
      </div>

      <!-- content 2-->
      <div data-tab="2">
      <ul class="u-hidden u-pl-6 u-grid u-gap-2"><li>The main elements and processes that comprise the petroleum system</li><li>The basics of reservoir fluids - oil, gas, and water</li><li>The phases and stages of exploration, field development, and production for conventional oil and gas fields</li><li>The main phases of the exploration and development process for unconventional resources</li><li>Key technological developments in the history of the oil and gas industry and their impact on petroleum geology</li><li>The Rock Cycle, including the three kinds of rocks and how they form</li><li>How to differentiate between a mineral and a rock, and how to distinguish one mineral from another based on physical properties</li><li>Key concepts of geological time and the difference between relative and radiometric geological time</li><li>Stratigraphic principles and the difference between lithostratigraphy and chronostratigraphy</li><li>How sequence stratigraphic analysis aids in the characterization of petroleum systems</li><li>Key concepts of plate tectonics, including seafloor spreading and plate margin types</li><li>The main types of sedimentary basins and their evolution in the context of plate tectonics</li><li>The main depositional controls for carbonate (e.g., limestone) reservoir rock distribution and how they differ from clastics (e.g., sandstone)</li><li>Classification system for carbonate rocks</li><li>To describe the models for key depositional environments of carbonate sediments</li><li>To distinguish the textural characteristics of carbonate deposits in different settings and describe the implications for reservoir quality and trends</li><li>The main diagenetic processes affecting carbonate rocks and their impact on reservoir quality</li><li>The main depositional controls for clastic (e.g., sandstone) reservoir rock distribution</li><li>Categories and classification systems for clastic rocks</li><li>To describe the models for key depositional environments of clastic rocks, including onshore river and desert settings, marginal marine beach and delta settings, and deep water submarine fan settings</li><li>To distinguish the grain size characteristics of clastic deposits in different settings and describe the implications for reservoir quality and trends</li><li>The basic elements and processes of the petroleum system concept</li><li>The characteristics of high-quality source rocks and the concepts to TOC% (Total Organic Carbon Content) and kerogen type</li><li>The differences between oil and gas source rocks</li><li>The different measures for source rock maturity and how these are used to define the hydrocarbon generation history of source rock units</li><li>The main depositional controls for clastic and carbonate source rocks and the importance of anoxic conditions for the accumulation of organic source rock material</li><li>The concepts of reservoir porosity and permeability</li><li>Controls on reservoir quality by texture</li><li>Post-depositional and diagenetic processes that affect Reservoir Quality</li><li>Classification systems for clastic and carbonate reservoir rocks</li><li>The concept of net pay</li><li>The different types of naturally fractured reservoirs and the concept of dual porosity systems</li><li>The concepts of seal rock characteristics and quality</li><li>The different types of fault seals, including juxtaposition and fault smear seals</li><li>Identify, describe, and understand the formation of key geological fold and fault structures</li><li>Describe principle stress configurations and the implications for the orientation of fractures and faults</li><li>Explain the concept of strike and dip for characterizing the orientation of geologic strata and structures</li><li>Explain the difference between structural and stratigraphic trap</li><li>Recognize uncertainties associated with fault trap</li><li>Describe the types of structural traps associated with extentional, compressional, and strike slip tectonic settings</li><li>Explain the meaning of timely maturation and migration and the concept of "critical moment" for a petroleum system</li><li>Describe the North Sea Central Graben as an example of a vertically drained marine basin petroleum system</li><li>List elements of the North Sea Central Graben petroleum system, explain its timing, and define its critical moment</li><li>Describe the Ekofisk Field as an example of the North Sea Central Graben petroleum system</li><li>Describe the East Venezuela Basin as an example of a laterally drained marine basin petroleum system</li><li>Describe the Songliao Basin, NE China as an example of a terrestrial basin petroleum system</li><li>List elements of the Songliao Basin petroleum system, explain its timing, and define its critical moment</li><li>Describe the Daan Field as an example of the Songliao Basin petroleum system</li><li>Explain the concept of the Exploration and Production or E&amp;P Cycle</li><li>Understand the steps in the Exploration Process and the work done in each:</li><li>Describe the four Stages of Conventional Field Development:</li><li>Understand the concept of Reservoir Flow Units as the basis for a common industry technique of reservoir zonation</li><li>The basic concepts of 2D and 3D Seismic Data and how it is used to investigate the subsurface</li><li>How seismic data is acquired, processed, and displayed for visualization and interpretation</li><li>How to identify various types of drilling rigs and key pieces of equipment used in drilling, including bits, and how they function</li><li>How to understand the main points of the drilling process, including the basics of horizontal and directional drilling</li><li>The basics of how a well is completed, including through hydraulic fracturing and other techniques of reservoir stimulation</li><li>How rock and hydrocarbon information is gathered during the drilling of a well through mudlogging, coring, wireline logging, and testing</li><li>Basic concepts of reserves and resource estimation</li><li>How to use the Volumetric Method to estimate Hydrocarbons in Place</li><li>What is meant by an Unconventional Resource (UR), and how it differs from a Conventional Field</li><li>Geologic factors controlling productivity of UR plays</li><li>The importance of geomechanical factors, in particular Stress Field Orientation, relative to UR productivity</li><li>Key aspects of the process of Hydraulic Fracturing in Horizontal Wells for UR Development</li><li>What is meant by a “Shale Hybrid Play”</li><li>Two case studies are presented to illustrate and reinforce UR play concepts: Eagle Ford and Niobrara Shale Plays</li></ul>
      </div>

      </div>
      <!-- shading -->
      <div class="u-absolute u-bottom-8 u-w-full u-h-8 u-bg-red-900/10 u-opacity-10 u-mix-blend-lighten"></div>
      <div class="u-w-full u-h-8 u-bg-transparent"></div>
    </div>
    </div>


  </article>
  </div>
 </main>

