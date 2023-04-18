const jobTitles = [
    'Physician-Scientists',
    'Medical Curators',
    'Health Researchers',
    'Patient Advocates',
    'Health Organizations',
    'Medical Experts',
  ];
  
  const jobTitleElem = document.getElementById('job-title');
  let currentJobTitleIndex = 0;
  
  
  setInterval(() => {
    
    setTimeout(() => {
      currentJobTitleIndex = (currentJobTitleIndex + 1) % jobTitles.length;
      jobTitleElem.textContent = jobTitles[currentJobTitleIndex];
      
      if (currentJobTitleIndex === 1 || currentJobTitleIndex === 5) {
        jobTitleElem.classList.add('justGo-blue');
        jobTitleElem.classList.remove('justGo-purple', 'justGo-green');
      } else if (currentJobTitleIndex === 0 || currentJobTitleIndex === 3) {
        jobTitleElem.classList.add('justGo-green');
        jobTitleElem.classList.remove('justGo-purple', 'justGo-blue');
      } else {
        jobTitleElem.classList.add('justGo-purple');
        jobTitleElem.classList.remove('justGo-blue', 'justGo-green');
      }
    }, 500);
  }, 1500);
  

  const navEl = document.querySelector('.navbar');
    console.log(scrollY);
    window.addEventListener('scroll', () =>  {
      if (window.scrollY >= 3100) {
        navEl.classList.add('navbar-scrolled');
      } else if (window.screenY < 3100) {
        navEl.classList.remove('navbar-scrolled');
      }
    });