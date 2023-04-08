function searchName (name) {
    fetch (`https://api.github.com/search/users?q=${name}`)
    .then(response => response.json())
    .then(data => {console.log(data)
        data.items.forEach(element => {
            displayUserName(element) 
        });
    })
}

function displayUserName (data) {
    const ul =document.getElementById('user-list')
    const li = document.createElement('li')
    li.innerHTML = `<h2>${data.login}</h2>
                   <img src="${data.avatar_url}" alt = "noImage > 
                   <a href="${data.url}" > ${data.url} </a>`
ul.appendChild(li)

}
function getFormInput () {
    const form = document.getElementById('github-form')
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const value = e.target.search.value
        searchName(value)
        e.reset()
    })
}
document.addEventListener("DOMContentLoaded", function (){

getFormInput()
})


function userRespositories (userName)  {
    fetch("https://api.github.com/users/${username.login}/repos")
    .then(response => response.json())
    .then(repos => {
        console.log(repos)
        repos.forEach(item => {
            displayRepositoryInformation(item)
        })
    })
}

function displayRepositoryInformation (repos) {
    const ul = document.getElementById('repos-list')
    const li = document.createElement('li')
    repos.forEach(repo => li.appendChild(repo))
    li.innerHTML =`<h2> ${repo.login}</h2>                                                                                                                             
                  `




}

