

/**
 * Updates the text content of the first <h1> element on the page to 'Una vetrina spoglia'.
 * Logs the new text content to the console.
 */
const changeH1Text = function(){
    const newH1 = document.querySelector('h1').textContent = 'Una vetrina spoglia'
    console.log(newH1)
}


const changeBg = function (){
    const nuovoBg = document.querySelector('body').style.backgroundColor = 'yellow'
}

const changeAddress = function(){
    const newAddress= document.getElementById('address').textContent = 'Via marco polo 33, Roma'
    console.log(newAddress)
}

const addLinkClass = function(){
    let newLinkClass = document.querySelectorAll('a')
    for (let i=0; i<=newLinkClass.length; i++){
        newLinkClass[i].classList.add('amazon')
    }
    console.log(newLinkClass)
}

const imgVisibility = function(){
    for (image of document.querySelectorAll('img')){
        image.classList.toggle('hidden')
    }
    console.log(image)
}

const getRandomColor = function(){
    const RED = Math.round(Math.random*255)
    const GREEN = Math.round(Math.random*255)
    const BLUE = Math.round(Math.random*255)

    return 'rgb ( '+ RED +',' + GREEN +',' + BLUE +')'
}


const changePriceColor = function(){
    const newColor = getRandomColor()
    let prices = document.getElementsByClassName('price')
    for (let i=0; i<=prices.length; i++){
        prices[i].style.color = newColor
    }
    console.log(prices)
}

