

const menu = document.querySelector('.menu'); 
const menuItems = Array.from(menu.querySelectorAll('a')); 

let activeItem = menu.querySelector('[aria-selected]'); 

const indicator = document.createElement('span'); 
indicator.classList.add('indicator')
menu.appendChild(indicator)

if (activeItem){
indicator.style.setProperty('transform', getTransform(activeItem))


}

// calcule transformation a appliquer a l'indicateur pour le positionner au niveau de l'element 
/**
 * 
 * @param {HTMLElement} element 
 * @return{string}
 */

function getTransform (element){
    // calcul position transformation
    const transform = { 
        x: element.offsetLeft, // position par rapport au premier parent relatif (menu ici) 
        scaleX: element.offsetWidth/100
    }
    return `translateX(${transform.x}px) scaleX(${transform.scaleX})`  // transformation a preciser en pixels attention a l'ordre

}


/**
 * 
 * @param {{currentTarget: HTMLElement}} e 
 * 
 */

function onItemClick(e){
    if(e.currentTarget === activeItem){ return}
    if(activeItem) {

    }
    activeItem?.removeAttribute('aria-selected')  // pareil que if(activeItem){}
    e.currentTarget.setAttribute('aria-selected', 'true')
    indicator.animate([
        {transform: getTransform(e.currentTarget)}

    ], {
        fill: 'both', 
        duration: 600, 
        easing: 'cubic-bezier(.48,1.55,.28,1)'
    })
    activeItem = e.currentTarget
}


menuItems.forEach((item) => {
item.addEventListener('mouseover', onItemClick)

})