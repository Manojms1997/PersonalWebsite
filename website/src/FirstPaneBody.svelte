<!-- <div class="first-pane-body">
    <h1 class="text-5xl lg:text-7xl font-sans text-stone-900 dark:text-white">
        <div class="inline-display text-6xl lg:text-8xl">H</div>i!<br /> <div class="inline-display text-6xl lg:text-8xl">I</div>'m <div class="inline-display text-6xl lg:text-8xl">M</div>ANOJ 
      <div class="inline-display text-6xl lg:text-8xl">M</div>YSORE <div class="inline-display text-6xl lg:text-8xl">S</div>RINATH<br /> 
      <div class="inline-display text-6xl lg:text-8xl">I</div>'m a <div class="inline-display text-6xl lg:text-8xl">S</div>oftware <div class="inline-display text-6xl lg:text-8xl">E</div>ngineer
    </h1>
  </div>

  <style>
      .first-pane-body {
      }
      .inline-display {
          display: inline;
      }
  </style> -->

<section
  class="bg-cover bg-center bg-opacity-50 min-h-screen flex flex-col justify-center"
  style="background-image: url('first-section-background.png');" id="hero-section"
>
  <div class="container mx-auto flex flex-col md:flex-row items-center py-12">
    <div class="md:w-1/2">
      <h2 class="text-4xl md:text-6xl font-bold leading-tight text-white">Hi, I am Manoj</h2>
      <h2 class="text-4xl md:text-6xl font-bold leading-tight text-white">I am a Computer Engineer</h2>
    </div>
    <div class="md:w-1/2 mt-6 md:mt-0 flex justify-center">
      <div
        class="rounded-full h-64 w-64 md:h-96 md:w-96
         overflow-hidden"
      >
        <img
          class="object-cover h-full w-full"
          src="Manoj.jpg"
          alt="Profile Picture"
          id="profile-pic"
        />
      </div>
    </div>
  </div>
</section>

<style>
  .bg-cover {
    background-size: cover;
  }

  .bg-center {
    background-position: center;
  }

  .bg-opacity-50 {
    --bg-opacity: 0.5;
    background-color: #000000;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .bg-opacity-50 ::before {
    opacity: var(--bg-opacity);
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .object-cover {
    object-fit: cover;
  }

  .min-h-screen {
    min-height: 90vh;
  }
</style>

<script>
  import { onMount } from 'svelte';

  // onMount(async () => {
  //   const heroSection = document.getElementById('hero-section');
  //   heroSection.addEventListener('mousemove', (event) => {
  //     const xPos = event.clientX / window.innerWidth;
  //     const yPos = event.clientY / window.innerHeight;
  //     heroSection.style.backgroundPosition = `${xPos * 100}% ${yPos * 100}%`;
  //   });
  // });

</script>