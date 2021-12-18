<script>
  import Header from "./Header.svelte";
  import About from "./About.svelte";
</script>

<div class="first-pane">
  <Header />
  <div class="first-pane-body">
    <h1 class="text-7xl font-sans text-stone-900 dark:text-white">
      Hi!<br /> I'm Manoj Mysore Srinath<br /> I'm a Software Engineer
    </h1>
    <!-- <img
      src="down-icon-light.svg"
      alt="scroll-down"
      id="scroll-down"
	  height="20px"
	  width="20px"
    /> -->
  </div>
</div>
  <About />


<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .first-pane {
    height: 100vh;
    width: 100vw;
  }

  .first-pane-body {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .h1 {
    font-size: 7vh;
    font-family: "Brush Script MT", cursive;
    margin-bottom: -20px;
  }

  .second-pane {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
