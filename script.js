const toggleBtn = document.getElementById("themeToggle");/* get toggle button */

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");/* toggle dark mode */

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "Light";/* change button text */
  } else {
    toggleBtn.textContent = "Dark";/* change button text */
  }
});