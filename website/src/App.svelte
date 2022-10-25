<script>
  import Header from "./Header.svelte";
  import FirstPaneBody from "./FirstPaneBody.svelte";
  import About from "./About.svelte";
  import Projects from "./Projects.svelte";
  import Contact from "./Contact.svelte";

  import FirstPage from "./pages/First-Page.svelte";
  import DetailsPage from "./pages/Details-Page.svelte";
  import {gsap} from 'gsap';

  import {Router,Route,Link} from 'svelte-routing'
  
  export let url = "";
</script>

<!-- <div class="first-pane">
  <Header />
  <FirstPaneBody />
  <hr class="border-2 rounded border-black dark:border-white ">
</div>
  <About />
  <hr class="border-2 rounded border-black dark:border-white ">
  <Projects />
  <hr class="border-2 rounded border-black dark:border-white ">
  <Contact /> -->

  <Router url="{url}">
    <nav>
      <Link to="/">Home</Link>
      <Link to="blog">Blog</Link>
     </nav>
     <div>
      <Route path="/"><FirstPage /></Route>
      <Route path="blog" component="{DetailsPage}" />
     </div>
  </Router>

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

  .box {
    width: 200px;
    height: 200px;
    margin: 10px;
    background: rgb(11, 185, 58);
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
