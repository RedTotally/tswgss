var opened = false

function phoneMenu(){

if(opened == false){
    document.getElementById('nav-bar').classList.remove('close')
    document.getElementById('nav-bar').classList.add('open')
    opened = true
}else{
    document.getElementById('nav-bar').classList.remove('open')
    document.getElementById('nav-bar').classList.add('close')
    opened = false
}

}