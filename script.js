
function animation(){
    const elementos = document.querySelectorAll(".logos")
    const card = document.querySelectorAll(".container_project")

    const observer = new IntersectionObserver((entries,observer) =>{
        entries.forEach(entry=>{
            if (entry.isIntersecting){
                entry.target.classList.add("mostrar")

                observer.unobserve(entry.target);
            }
        })
    })
    elementos.forEach(el => observer.observe(el))
    card.forEach(el => observer.observe(el))
}
function menu(){
    let btnMenu = document.querySelector(".menu")
    let nav = document.querySelector(".nav")
    
    btnMenu.addEventListener("click", ()=>{
        nav.classList.toggle("aparecer_menu")
    })
    document.addEventListener("click", (e)=>{
        if(!nav.contains(e.target) && !btnMenu.contains(e.target)){
            nav.classList.remove("aparecer_menu")
        }
    })
}
animation();
menu()
