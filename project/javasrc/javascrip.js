let images = ['background3.jpeg', 'background4.jpg', 'background2.jpg', 'background1.jpeg',]

let slider= document.getElementById('slider')

let index = 0

slider.style.backgroundImage = `url(./images/${images[index]})`

function changeSlide(arrow) {
    if (arrow == 'left') {
        index--

        if (index < 0)
        index = images.length - 1    
    }
        
        else{
            
            index++

            if (index == images.length)
            index = 0 
                
            
        }

        slider.style.backgroundImage = `url(./images/${images[index]})` 


        let item = document.getElementsByClassName('item')

        for (let j = 0; j < item.length; j++) {
            item[j].classList.remove('active')
        }
    
        item[index].classList.add('active')


        
}

function showItems() {

    let items = document.getElementById('items')

    for (let i = 0; i < images.length; i++) {
        items.innerHTML +=  `
            <div onclick='setImage(${i})' class="item" style="background-image: url(./images/${images[i]})"></div>
        `
    }
}

function setImage(i) {
    let item = document.getElementsByClassName('item')

    for (let j = 0; j < item.length; j++) {
        item[j].classList.remove('active')
    }

    item[i].classList.add('active')

    slider.style.backgroundImage = `url(./images/${images[i]})` 
    index = i

    
}

showItems()

setInterval(changeSlide, 2000)