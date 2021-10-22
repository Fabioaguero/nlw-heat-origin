const LinksSocialMedia = {
  github: "Fabioaguero",
  youtube: "baby69stryker",
  facebook: "fabiodossantosaguero1",
  instagram: "fabiodossantosaguero",
  twitter: "fabioaguero01",
  linkedin: "in/fabiodossantosaguero"
};


function changeSocialMedia () {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
};


changeSocialMedia()

