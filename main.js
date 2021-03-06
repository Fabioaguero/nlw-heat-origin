const LinksSocialMedia = {
  github: "Fabioaguero",
  youtube: "baby69stryker",
  facebook: "fabiodossantosaguero1",
  instagram: "fabiodossantosaguero",
  twitter: "fabioaguero01",
  linkedin: "in/fabiodossantosaguero"
};


function changeSocialMedia () {
  for (let a of socialLinks.children) {
    
    const social = a.getAttribute('class')
  
    

    a.href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
};

changeSocialMedia()


function getGitHubProfileInfos () {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userAvatar = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()

