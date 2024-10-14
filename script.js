// MOBILE NAVBAR
function toggleNavbar() {
  console.log('hello')
  document.querySelector('.mobile-nav').classList.toggle('visible')
}

document.querySelector('.dropdown-button-bar').addEventListener('click', toggleNavbar)
document.querySelector('.dropdown-button-x').addEventListener('click', toggleNavbar)

// DROPDOWN BUTTON
function toggleButtons() {
  console.log('hello')
  document.querySelector('.dropdown-button-bar').classList.toggle('visible')
  document.querySelector('.dropdown-button-x').classList.toggle('visible')
}

document.querySelector('.dropdown-button-bar').addEventListener('click', toggleButtons)
document.querySelector('.dropdown-button-x').addEventListener('click', toggleButtons)

// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// PORTFOLIO
fetch('projects.json').then(function (res) {
  return res.json()
}).then(function (data) {

  const target = document.querySelector('.target')

  data.project.forEach(function (project) {
    target.innerHTML += `
            <div>
                <img src="${project.image}" width="300"/>
                <h2>${project.name}</h2>
                <p>${project.desc}</p>
                <a href="${project.github}" target="_blank">Check it out on GitHub!</a><br>
                <a href="${project.link}" target="_blank">Check out the live version!</a>
            </div>
        `
  })
})

// CERTIFICATES
fetch('certificates.json').then(function (res) {
  return res.json()
}).then(function (data) {

  const target = document.querySelector('.target2')

  data.certificate.forEach(function (certificate) {
    target.innerHTML += `
            <div>
                <img src="${certificate.image}" width="300"/>
                <h3>${certificate.name}</h3>
                <p>${certificate.desc}</p>
            </div>
        `
  })
})