const btnDnone = document.querySelectorAll(".btnDnone"); 
const formObjectif = document.querySelector("#formObjectif"); 
const formReport = document.querySelector("#formReport"); 
const formInfo = document.querySelector("#formInfo"); 

console.log(btnDnone)

btnDnone.forEach( element => {
    element.addEventListener('click', (e)=> {
        console.log('coucou')
        if( e.target.id === 'btnObjectif'){
            formObjectif.classList.remove('d-none'); 
            btnDnone.forEach( element => {element.classList.add('d-none')})    
        } 
        else if( e.target.id === 'btnReport'){
            formReport.classList.remove('d-none'); 
            btnDnone.forEach( element => {element.classList.add('d-none')})
        } 
        else if( e.target.id === 'btnInfo'){
            formInfo.classList.remove('d-none'); 
            btnDnone.forEach( element => {element.classList.add('d-none')})
        }; 

    })


})