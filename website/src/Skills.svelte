<script>
  import Skill from "./Skill.svelte";
</script>

<div id="skills" class="">
  <h1 class="text-5xl text-stone-900 dark:text-white m-4">Skills</h1>
  <h1 class="text-3xl text-stone-900 dark:text-white ml-20 mt-20">Languages</h1>
  <!-- <div class="text-2xl text-stone-900 dark:text-white ml-28">Javascript, Typescript, HTML, CSS, Dart, Python, C, C++, C#</div> -->
  <div class="skill-block">
    <Skill skillName="Typescript" skillImagePath="typescript-logo.svg" />
    <Skill skillName="Javascript" skillImagePath="javascript-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="HTML" skillImagePath="html-logo.svg" />
    <Skill skillName="CSS" skillImagePath="css3-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="Dart" skillImagePath="dart-logo.svg" />
    <Skill skillName="Python" skillImagePath="python-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="C" skillImagePath="c-logo.svg" />
    <Skill skillName="C++" skillImagePath="cpp-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="C#" skillImagePath="csharp-logo.svg" />
  </div>

  <h1 class="text-3xl text-stone-900 dark:text-white ml-20">Technologies</h1>
  <!-- <div class="text-2xl text-stone-900 dark:text-white ml-28">Angular, Node.js, Svelte.js, Flutter, git, docker, webpack</div> -->
  <div class="skill-block">
    <Skill skillName="Angular" skillImagePath="angular-logo.svg" />
    <Skill skillName="Node.js" skillImagePath="nodejs-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName=".NET" skillImagePath="dotnet.png" />
    <Skill skillName="Flutter" skillImagePath="flutter-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="git" skillImagePath="git-logo.svg" />
    <Skill skillName="Docker" skillImagePath="docker-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="webpack" skillImagePath="webpack-logo.svg" />
    <Skill skillName="Svelte.js" skillImagePath="svelte-logo.svg" />
  </div>
  <h1 class="text-3xl text-stone-900 dark:text-white ml-20">Platforms</h1>
  <!-- <div class="text-2xl text-stone-900 dark:text-white ml-28">Linux, Android, Windows, Azure</div> -->
  <div class="skill-block">
    <Skill skillName="Linux" skillImagePath="linux-logo.svg" />
    <Skill skillName="Android" skillImagePath="android-logo.svg" />
  </div>
  <div class="skill-block">
    <Skill skillName="Windows" skillImagePath="windows-logo.svg" />
    <Skill skillName="Azure" skillImagePath="azure-logo.svg" />
  </div>
</div>

<style>
    .skill-block {
        display: flex;
        flex-wrap: wrap;
    }
</style>
