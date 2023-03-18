<script>
  export let projectLink;
  export let projectInfo;
  export let projectTitle;
  export let projectImage;

</script>

<div class="project-item">
  <div class="project-info w-6/12">
    <div
      class="project-title text-2xl md:text-4xl text-stone-900 dark:text-white m-4 "
    >
      {projectTitle}
    </div>
    <div
      class="project-description text-sm md:text-xl text-stone-900 dark:text-white "
    >
      {projectInfo}
    </div>
  </div>
  <div class="project-link w-6/12">
    <a href={projectLink} target="_blank">
      <img src={projectImage} alt={projectTitle} class="project-image object-contain shadow-lg" />
    </a>
  </div>
</div>

<style>
  .project-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* width: 90vw; */
    height: 40vh;
    justify-content: center;
    align-items: center;
  }
  .project-link {
    display: flex;
    flex-direction: column;
    /* width: 45vw; */
    height: 35vh;
    justify-content: center;
    align-items: center;
    /* background-image: url({projectImage}); */
  }
  .project-info {
    display: flex;
    flex-direction: column;
    /* width: 45vw; */
    height: 35vh;
    justify-content: space-around;
    align-items: center;
  }

  .project-image {
    height: 35vh;
    width: 45vw;
  }
</style>
