const navigation = document.querySelector(".navigation");

navigation.addEventListener("click", () => {
  navigation.classList.toggle("active");
  navigation.style.transform = "scale(0.95)";
  setTimeout(() => {
    navigation.style.transform = "scale(1)";
  }, 150);
});

document.addEventListener("click", (e) => {
  if (!navigation.contains(e.target)) {
    navigation.classList.remove("active");
  }
});
