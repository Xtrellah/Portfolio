
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



// PORTFOLIO

fetch('projects.json').then(function (res) {
    return res.json()
}).then(function(data) {
    
    const target = document.querySelector('.target')
    
    data.project.forEach(function (project){
            console.log(project.name)
            target.innerHTML += `
            <div>
                <img src="${project.image}" width="300"/>
                <h2>${project.name}</h2>
                <p>${project.desc}</p>
                <a href="${project.github}">Check it out on GitHub!</a><br>
                <a href="${project.link}">Check out the live version!</a>
            </div>
        `
    })
})
