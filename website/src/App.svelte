<script>
  import { HtmlTag } from "svelte/internal";

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

<div class="first-pane">
  <div class="header">
    <div class="header-left">
      <img src="favicon.png" alt="Manoj" width="50px" height="50px" />
    </div>
    <div class="header-right">
      <a
        class="header-items text-white hover:font-semibold hover:text-yellow-900"
        href="">About</a
      >
      <a class="header-items text-white" href="">Projects</a>
      <a class="header-items text-white" href="">Contact</a>
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
  <div class="first-pane-body">
    <h1
      class="text-7xl font-sans text-stone-900 hover:text-yellow-900 dark:text-white"
    >
      Hi!<br /> I'm Manoj Mysore Srinath<br /> I'm a Software Engineer
    </h1>
  </div>
</div>
<div class="second-pane">This is second pane</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  .first-pane {
    height: 100vh;
    width: 100vw;
  }

  .header-items {
    margin: 2vw;
  }
  /* #theme-change-icon {
	  margin-top: 2vh;
	  margin-bottom: 2vh;
	  margin-left: 2vw;
	  margin-right: 2vw;
  } */

  .first-pane-body {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
