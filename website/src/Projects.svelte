<script>
  import ProjectItem from "./Project-item.svelte";
</script>

<div class="projects-block" />
<h1 class="text-5xl text-stone-900 dark:text-white m-4">Projects</h1>
<!-- <h1 class="text-5xl text-stone-900 dark:text-white m-4 my-20">Recipeace</h1>
<div class="text-3xl text-stone-900 dark:text-white ml-20">
  a cross platform application for storing custom recipes developed using
  Flutter.
</div> -->
<ProjectItem projectImage="recipeace-image.jpeg" projectTitle="Recipeace" projectLink="https://github.com/Manojms1997/Recipeace" 
projectInfo="a cross platform application for storing custom recipes developed using
Flutter."/>
<!-- <hr class="border-t-2 rounded border-black dark:border-white "> -->

<!-- <h1 class="text-5xl text-stone-900 dark:text-white m-4 my-20">Covid Monitoring System</h1>
<div class="text-3xl text-stone-900 dark:text-white ml-20">
  An android application to monitor covid symptoms using mobile sensors.
</div> -->
<ProjectItem projectImage = "covidmonitoring-image.jpeg" projectTitle="Covid Monitoring System" projectLink="https://github.com/Manojms1997/CovidMonitoring" projectInfo="An android application to monitor covid symptoms using mobile sensors."/>
<!-- <h1 class="text-5xl text-stone-900 dark:text-white m-4 my-20">Smart Home Control-Gesture Detection</h1>
<div class="text-3xl text-stone-900 dark:text-white ml-20">
  An android application to capture user input gesture and upload it to local
  server.
</div> -->
<ProjectItem projectImage="smarthome-image.jpeg" projectTitle="Smart Home Control-Gesture Detection" projectLink="https://github.com/Manojms1997/SmartHomeGestureDetection" projectInfo="An android application to capture user input gesture and upload it to local
server."/>

<style>
  .projects-block {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 20px;
  }
</style>
