<script>
  import About from "../About.svelte";


</script>

<style>
    #body {
        position: relative; 
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #body::before {
        content: "";
      background-image: url('/background.png');
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.2;
    }

    .profile-image {
        max-height: 85vh;
        border-radius: 50%;
    }
</style>

<div class="first-page w-full">
    <!-- <div id="header">
        <img src="favicon.png" alt="logo" class="w-14">
    </div> -->
    <div id="body" class="flex justify-center items-center">
        <div id="details" class="w-1/2 relative flex justify-center items-center">
            <div id="details-contents inline-block">
                <h1 class="text-white text-7xl">Hello</h1>
                <h1 class="text-white text-7xl">I'm Manoj</h1>
                <h2 class="text-white text-3xl">Computer Engineer</h2> 
                <h2 class="text-white text-3xl">Software Developer</h2>
                <h2 class="text-white text-3xl">Student</h2>
                <button>Know More</button> 
            </div>
        </div>
        <div id="image" class="w-1/2 relative flex justify-center items-center">
            <div>
                <img src="/Manoj.jpg" alt="profile" class="profile-image">
            </div>
        </div>
    </div>
    <!-- <img src="background.png" alt="Manoj" width="50px" height="50px" /> -->
</div>