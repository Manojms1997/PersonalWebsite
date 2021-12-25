<script>
    export let skillName;
    export let skillImagePath;
</script>

<div class="skill w-full md:w-6/12">
    <div class="skill-name text-2xl text-stone-900 dark:text-white w-full md:w-6/12">
        {skillName}
    </div>
    <div class="skill-image-container w-full md:w-6/12">
        <img
          src={skillImagePath}
          alt={skillName}
          class="skill-image"
        />
    </div>
</div>


<style>
  .skill {
    display: flex;
    flex-direction: row;
    height: 20vh;
    /* width: 100vw; */
    /* width: 50%; */
    justify-content: center;
    align-items: center;
  }

  .skill-name {
      /* width: 50vw; */
      /* width: 50%; */
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .skill-image-container {
      /* width: 50vw; */
      /* width: 50%; */
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .skill-image {
      height: 10vh;
      width: 10vh;
  }
</style>
