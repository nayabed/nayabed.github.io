const navbar = document.querySelector(".nav")
const navToggleBtn = document.querySelector(".nav-toggle")

navToggleBtn.addEventListener("click", () => {
    const visible = navbar.getAttribute("data-visible")
    if (visible === "false"){
        navbar.setAttribute("data-visible", true)
        navToggleBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>"
    } else if (visible === "true"){
        navbar.setAttribute("data-visible", false)
        navToggleBtn.innerHTML = '<i class="fas fa-bars"></i>'
    }
})