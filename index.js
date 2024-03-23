const contactModal= document.getElementById("modalcontactme");
let openmodalBtn= document.getElementById('modal');
const menuBtn= document.getElementById('menu-btn')
const nav= document.getElementById('phoneMenu')
const closeBtn=document.getElementById('close-btn')

function openmodal(){
    console.log('clicked!!!!');
    document.getElementById('modal').classList.remove("hidden");
    document.getElementById('body').classList.add("bg-gray-100");

        // overlay.classList.remove("hidden");

    // openmodalBtn.addEventListener("click", openModal)
}

function removeModal(){
    console.log('clicked!!!!');
    document.getElementById('modal').classList.add("hidden");
    document.getElementById('body').classList.remove("bg-gray-200");
        // overlay.classList.remove("hidden");

    // openmodalBtn.addEventListener("click", openModal)
}

function darkMode(){
    var element=document.body;
    element.classList.toggle("dark-mode");
}

function showMenu(){
    document.getElementById('phoneMenu').classList.remove("hidden")

}

function closeMenu(){
    document.getElementById('phoneMenu').classList.add("hidden")


}