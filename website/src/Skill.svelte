<script>
    export let skillName;
    export let skillImagePath;
</script>

<div class="skill">
    <div class="skill-name text-2xl text-stone-900 dark:text-white">
        {skillName}
    </div>
    <div class="skill-image-container">
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
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  .skill-name {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .skill-image-container {
      width: 50vw;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .skill-image {
      height: 10vh;
      width: 10vh;
  }
</style>
