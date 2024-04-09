let accordionList = document.querySelectorAll(".faqs__accordion")

accordionList.forEach((accordion) => (
    accordion.addEventListener("click", () => {
        let icon = accordion.lastElementChild
        console.log(icon)
        let panel = accordion.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null
            icon.src = "/assets/images/icon-plus.svg"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px"
            icon.src = "/assets/images/icon-minus.svg"
        }
    })
))