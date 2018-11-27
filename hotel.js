// Je crée un objet, il représente un hôtel. 
// Cet hôtel a des caractéristiques et on peut lui faire des actions.
// Les caractéristiques ce sont les propriétés (utilisées en appelant hotel.mapropriété)
// Les actions ce sont les méthodes (des fonctions)
var hotel = {
    // On fait des propriétés pour stocker le nom, le nombre de chambres, le nombre de chambres réservées.
    nom: "Grand Budapest Hotel",
    nombreChambres: 240,
    chambresReservees: 54,
    // Le nombre de chambres libres, n'est pas stocké. On peut le retrouver en faisant une action, donc une méthode.
    chambresLibres: function() {
        // On crée une variable, elle est ponctuelle et ne sert que dans le cas de cette méthode.
        var chambresLibres = hotel.nombreChambres - hotel.chambresReservees;
        // On renvoie la variable
        return chambresLibres;
    },
    // Pour réserver une ou des chambres, on augmente le nombre de chambres réservées par celles voulues. Donc une méthode.
    reserverChambre: function(nombreDeChambresAReserver) {
        // Je vérifie qu'il y a assez de chambres
        var total = hotel.chambresReservees + nombreDeChambresAReserver;

        // Si le total des chambres réservées + celles voulues dépasse le nombre total de chambres, on affiche une erreur dans la console !
        if(total > hotel.nombreChambres) {
            console.error('Pas assez de chambres !');
        } else {
            // Sinon on incrémente les chambres réservées et on affiche un petit message !
            hotel.chambresReservees += nombreDeChambresAReserver;
            console.log(nombreDeChambresAReserver + ' chambres ont été réservées !');
        }
    }
};

// Pour connaître le nombre de chambres libres :

hotel.chambresLibres();

// Pour réserver trois chambres : 

hotel.reserverChambre(3);
