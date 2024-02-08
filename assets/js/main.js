function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop
    });
  }
}

document.getElementById('about-btn').addEventListener('click', () =>{
  scrollToSection('about');
});

document.getElementById('projects-btn').addEventListener('click', () =>{
  scrollToSection('projects');
});

document.getElementById('learning-btn').addEventListener('click', () =>{
  scrollToSection('learning');
});

document.getElementById('contact-btn').addEventListener('click', () =>{
  scrollToSection('contact');
});


