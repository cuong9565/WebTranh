function minus(id){
    element = document.getElementById(`${id}`)
    var x = max(1, parseInt(element.value) - 1)
    element.value = x
}

function plus(id){
    element = document.getElementById(`${id}`)
    var x = parseInt(element.value) + 1
    element.value = x
}

function max(x, y){
    if(x >= y) return x
    return y
}