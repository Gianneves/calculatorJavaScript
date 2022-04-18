function handlebtn(num) {
    // let p = document.createElement('p')
    // p.innerHTML = num
    // document.getElementById('result').appendChild(p)

    // or

    let number = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = number + num
    
}

function clean() {
    document.getElementById('result').innerHTML = ''
}

function btnBack() {
    let results = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = results.substring(0, results.length-1)
}

function calculate() {
    let results = document.getElementById('result').innerHTML
    if(results){
        document.getElementById('result').innerHTML = eval(results) // reconhece os simbolas usados na matematica
    }
   

}

