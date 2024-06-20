
// MOBILE NAVBAR
function toggleNavbar() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


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
