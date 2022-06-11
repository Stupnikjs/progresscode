const gridBox = document.querySelector('.gridBox'); 




const MoisTableau = [ "Janvier"  , "Fevrier" , "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]; 
const NbJourParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 




class Mois {

    MoisTableau = [ "Janvier"  , "Fevrier" , "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"]; 
    NbJourParMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    constructor(indexMois){
        
        this.indexMois = indexMois
        this.nomDuMois = MoisTableau[this.indexMois]; 
        this.nbJour = NbJourParMois[this.indexMois]; 
    };
   
   

    afficherMois(parent, aujourdhui) {

        // ne marche plus dans la nouvelle application 

        const ceJour = aujourdhui.getDate(); 

        var n = ceJour
        var coef = n / 7 ; 
        if (coef > 1){ 
        var coefArrondi =  Math.floor(coef); 
        var dateOffset = n - coefArrondi * 7 - 4 ; 
        } else {

            var dateOffset = n - 4
        }

        console.log(dateOffset);

        const h1 = document.querySelector('h1');
        const moisCard = document.querySelector('.moisCard'); 
        moisCard.textContent = this.nomDuMois; 
         
        for (var j = 0 ; j < dateOffset ; j++){
            
            const dayBox = document.createElement('div'); 
            dayBox.classList.add('dayBox'); 
            parent.appendChild(dayBox)
        }; 

        for (var i = 1; i < this.nbJour + 1 ; i++){
            
            const id = h1.id
            const dayBox = document.createElement('div'); 
            dayBox.classList.add('dayBox'); 
            dayBox.setAttribute('id', i ); 


            // deux ou un seul chiffre dans le jour et le mois 

            const jour = i.length === 1 ? "0"+ i : i ; 
            const mois = (this.indexMois + 1).toString().length === 1 ? "0" + (this.indexMois + 1).toString() : (this.indexMois + 1).toString();
            const date = jour+mois 
            
            // contenu de la case 
            dayBox.innerHTML = `<a href='/profile/${id}/${date}'>${i}</a>`; 
            

            if (ceJour === i ) dayBox.classList.add('ceJour');

            // ajout de la case 

            parent.appendChild(dayBox); 
            
        }
    
    }
    afficherMoisSuivant(parent, aujourdhui) {
        
        // d-none sur mois precedent 
        const moisCard = document.querySelector('.moisCard'); 
        const moisAffiche = moisCard.textContent;                                // prend la valeur du mois affiché 
        const indexMoisAffiche  =  MoisTableau.indexOf(moisAffiche);             // recupere l'index 
        const joursMoisPrecedent = document.querySelectorAll('.dayBox');         // selectionne toutes les dayBox du mois en cours puis d-none 
        joursMoisPrecedent.forEach(Element => Element.classList.add('d-none')) 
        
        const moisSuivant = new Mois(indexMoisAffiche+1)    // rappelle la fonction pour le mois suivant 
        moisSuivant.afficherMois(parent, aujourdhui); 
        
    }


}

const btnChangerMois = document.querySelector("#changerMois"); 



const aujourdhui = new Date();

const dayOfWeek = aujourdhui.getDay(); 

 
const ceMois = aujourdhui.getMonth(); 

const moisEnCours = new Mois(ceMois); 
moisEnCours.afficherMois(gridBox, aujourdhui); 


btnChangerMois.addEventListener( "click", ()=> {
    moisEnCours.afficherMoisSuivant(gridBox,aujourdhui )

})

