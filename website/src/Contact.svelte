<script>
  let linkedinLink =
    "https://www.linkedin.com/in/manoj-mysore-srinath-3642821b9/";
  let githubLink = "https://github.com/Manojms1997";
  let emailLink = "mailto:mmysores@asu.edu";
</script>

<div class="contact-space">
  <h1 class="Contact-heading text-5xl text-stone-900 dark:text-white m-4">
    Contact
  </h1>
  <div class="contact-body">
    <div class="social-media-links">
      <!-- <img src="facebook-logo.svg" alt="Manoj" width="50px" height="50px" class="m-1"/> -->
      <a href={linkedinLink}>
        <img
          src="linkedin-logo.svg"
          alt="linkedin"
          width="50px"
          height="50px"
          class="m-1"
        />
      </a>
      <a href={githubLink}>
        <img
          src="github-dark-logo.svg"
          alt="github"
          width="50px"
          height="50px"
          class="m-1"
        />
      </a>
      <a href={emailLink}>
        <img
          src="email-logo.svg"
          alt="email"
          width="50px"
          height="50px"
          class="m-1"
        />
      </a>
    </div>
  </div>
</div>

<style>
  .contact-space {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 50vh;
    align-items: center;
    justify-content: center;
  }

  .Contact-heading {
    width: 100vw;
    height: 10vh;
  }

  .contact-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 40vh;
  }

  .social-media-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
