
// MOBILE NAVBAR

function toggleNavbar() {
    console.log('hello')
    document.querySelector('.mobile-nav').classList.toggle('visible')
  }

document.querySelector('.dropdown-button').addEventListener('click', toggleNavbar)



// PORTFOLIO

fetch('projects.json').then(function (res) {
    return res.json()
}).then(function(data) {
    
    const target = document.querySelector('.target')
    
    data.project.forEach(function (project){
            console.log(project.name)
            target.innerHTML += `
            <div>
                <img src="${project.image}" />
                <h2>${project.name}</h2>
                <p>${project.desc}</p>
                <a href="${project.link}">Check it out on GitHub!</a>
            </div>
        `
    })
})
