const container = document.getElementById("parent");
const themeMode = window.matchMedia("(prefers-color-scheme: dark)");
const htmldoc = document.documentElement;

const toggleBtn = document.createElement("button")
toggleBtn.classList.add("self-start", "bg-gray-200", "px-3", "py-1", "rounded-md", "hover:border-1", "hover:border-gray-400", "cursor-pointer")
container.append(toggleBtn)

function checkTheme(event){
    const isDark = event.matches;
    const theme = isDark === "dark" ? "dark" : "light"

    if(theme === "dark"){
        htmldoc.setAttribute("data-theme", "dark")
        console.log("dark")
        toggleBtn.textContent = "Light"
    }else{
        htmldoc.setAttribute("data-theme", "light")
        console.log("light")
        toggleBtn.textContent = "Dark"
    }
}

function toggleTheme(){
    const currentTheme = htmldoc.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark"

    htmldoc.setAttribute("data-theme", newTheme)

    if(htmldoc.getAttribute("data-theme") === "dark"){
        document.body.classList.remove("bg-gray-200")
        document.body.classList.add("bg-[#10172a]")
        container.classList.remove("bg-white")
        container.classList.add("bg-black/50", "text-white")
        toggleBtn.classList.remove("bg-gray-200")
        toggleBtn.classList.add("text-white", "bg-[#10172a]")

    }else{
        document.body.classList.remove("bg-[#10172a]")
        document.body.classList.add("bg-gray-200")
        
        container.classList.remove("bg-black/50", "text-white")
        container.classList.add("bg-white")
        
        toggleBtn.classList.remove("text-white", "bg-[#10172a]")
        toggleBtn.classList.add("bg-gray-200")
        
    }
    toggleBtn.textContent = newTheme === "dark" ? "Light" : "Dark"
}

themeMode.addEventListener("change", checkTheme)
document.addEventListener("DOMContentLoaded", ()=>{
    checkTheme(themeMode)
})
toggleBtn.addEventListener("click", toggleTheme)
