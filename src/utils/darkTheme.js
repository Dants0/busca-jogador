export default function changeThemeColor_2(param){
    if (document.body.classList.toggle("dark") == true) {
        document.getElementById('title').style.color = "#f1f1f1"
        document.getElementById('home').style.color = "#f1f1f1"
        document.getElementById('player').style.color = "#f1f1f1"
    } else {
        document.getElementById('title').style.color = "#000"
        document.getElementById('home').style.color = "#000"
        document.getElementById('player').style.color = "#000"
    }
}