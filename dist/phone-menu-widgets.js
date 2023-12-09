var opened = false

function phoneMenu(){

if(opened == false){
    document.getElementById('options').classList.remove('option-close')
    document.getElementById('options').classList.add('option-open')
    document.getElementById('bar').classList.add('opened-width')
    document.getElementById('widget-page').classList.add('opened-hidden')
    opened = true
}else{
    document.getElementById('options').classList.remove('option-open')
    document.getElementById('options').classList.add('option-close')
    document.getElementById('bar').classList.remove('opened-width')
    document.getElementById('widget-page').classList.remove('opened-hidden')
    opened = false
}

}