<script>
    import * as animateScroll from "svelte-scrollto";
  let isThemeDark = true;
  const html = document.querySelector("html");

  var changeTheme = () => {
    console.log(isThemeDark);
    if (isThemeDark) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
    isThemeDark = !isThemeDark;
  };
</script>

<div class="header">
  <div class="header-left">
    <img src="favicon.png" alt="Manoj" width="50px" height="50px" />
  </div>
  <div class="header-right">
    <div class="header-items text-stone-900 dark:text-white hover:font-semibold cursor-pointer" on:click={() => {animateScroll.scrollTo({element: '.about-block'})}}>About</div>
    <div class="header-items text-stone-900 dark:text-white hover:font-semibold cursor-pointer" on:click={() => {animateScroll.scrollTo({element: '.projects-block'})}}>Projects</div>
    <div class="header-items text-stone-900 dark:text-white hover:font-semibold cursor-pointer">Contact</div>
    <div on:click={changeTheme}>
      {#if isThemeDark}
        <img
          src="theme-change-dark.svg"
          alt="theme-change"
          id="theme-change-dark"
          class="header-items"
        />
      {:else}
        <img
          src="theme-change-light.svg"
          alt="theme-change"
          id="theme-change-light"
          class="header-items"
        />
      {/if}
    </div>
  </div>
</div>

<style>
  .header-items {
    margin: 2vw;
  }

  .header {
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header-left {
    height: 10vh;
    width: 30vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header-right {
    height: 10vh;
    width: 70vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>
