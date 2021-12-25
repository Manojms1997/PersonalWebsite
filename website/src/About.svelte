<script>
  import Skills from "./Skills.svelte";
</script>

<div class="about-block">
  <h1 class="text-5xl text-stone-900 dark:text-white m-4">About</h1>

  <div id="description" class="text-xl md:text-3xl text-stone-900 dark:text-white m-20 md:text-justify">
    I'm a Software Engineer with two years of experience in web development. I
    enjoy building web and mobile applications. Currently, I am pursuing my
    master's in Computer Engineering(Computer Systems) at Ira A Fulton School of
    Engineering, Arizona State University. I am actively looking for Software
    Engineering Internships for Summer-2022.
  </div>
  <Skills />
  <!-- <div id="work">
    <h1 class="text-5xl text-stone-900 dark:text-white m-4 my-20">Work Experience</h1>
    <h1 class="text-3xl text-stone-900 dark:text-white ml-20">
      Software Engineer-Design and Development, Siemens Healthineers, Bangalore,
      India
    </h1>
    <h1 class="text-3xl text-stone-900 dark:text-white ml-20">Intern, Siemens Healthineers, Bangalore</h1>
    <h1 class="text-3xl text-stone-900 dark:text-white ml-20">Intern, LEOS, Indian Space Research Organization(ISRO), Bangalore</h1>
  </div>
  <div id="education" >
    <h1 class="text-5xl text-stone-900 dark:text-white m-4 my-20">Education</h1>
    <h1 class="text-3xl text-stone-900 dark:text-white mx-20">
      Pursuing Master of Science in Computer Engineering(Computer Systems) at
      Arizona State University, Tempe, Arizona
    </h1>
    <h1 class="text-3xl text-stone-900 dark:text-white mx-20">
      Bachelor of Engineering in Electronics and Communication Engineering at
      Sri Jayachamarajendra College of Engineering, Mysuru, India
    </h1>
  </div> -->
</div>


<style>
  .about-block {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 20px;
  }
</style>