const configImage = document.getElementById("configuration-image");
const configName = document.getElementById("configuration-name");
const profileNameHTML = document.querySelector(".profile__name");
const profilePic = document.getElementById("profile__picture");

const demoimg = document.getElementById("demo");

configImage.addEventListener("keyup", (e) => {
  const file = e.target.files[0];
  console.log(file);

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      let result = e.target.result;
      profilePic.style.backgroundImage = `url("${result}")`;
      //   demoimg.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

configName.addEventListener("change", (e) => {
  const name = e.target.value;
  profileNameHTML.innerHTML = name;
});
