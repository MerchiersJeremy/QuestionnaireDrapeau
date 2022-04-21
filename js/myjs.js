var choix = sessionStorage.getItem("transfert");            /* récupération de la valeur transférée qui correspond à la région choisie dans */
document.getElementById("Choix").innerHTML = ("Jouons avec la région : " + choix);                 /* la page index */

function trierRegion(tableau,variable)                      /* La fonction trie la région grâce à la variable récupéréé */
    {
        var filtre = [];                                    /* de la première page qui se nomme "Choix" */
        var y=0;
        for (var i=0; i<tableau.length; i++)
            {
                if(tableau[i]["region"] == variable)        /* boucle for qui vérifie si la région dans le tableau countries */
                    {                                       /* correspond à la variable en question */
                        filtre[y] = i;                      /* on met dans le tableau filtré la valeur du pays de la bonne région*/
                        y = y+1;                            /* on incrémente Y après chaque assignation de valeur pour que le tableau */
                    }                                       /* filtré soit organisé de manière linéaire */
            }
        return filtre;
    }

function shuffle(tableau)
{
    for (var i = tableau.length - 1; i > 0; i--)
    {                                                           /* Cette fonction s'occupe de switcher aléatoirement les places des valeurs*/
        const j = Math.floor(Math.random() * (i + 1));          /* dans un tableau, je n'ai pas créer cette fonction par moi même car je ne */
        [tableau[i], tableau[j]] = [tableau[j], tableau[i]];    /* trouvais pas de solution mais je comprend bien ce qu'elle fait */
    }
    return tableau;
}

function randomedTableau (tableau,j)                            /* Cette fonction recopie un tableau en diminuant sa taille à J.*/
    {
        var tableauRedim = [];                                  /* Elle me permet de séléctionner les 10 questions après avoir mélanger les valeurs*/
        for (var i=0; i<j; i++)                                 /* Bien entendu je ne prend que les valeurs du tableau initial de tableau[0] à */
            {                                                   /* tableau[j-1], donc c'est les valeurs tableau[j] à tableau[tableau.length] qui*/
                tableauRedim[i] = tableau[i];                   /* qui ne seront pas utilisées */
            }
        return tableauRedim;
    }


function reponseRandom(tableau, j)                       /* Ajout de la bonne réponse dans le tableau */
    {
        reponseRdm = [];
        shuffle(tableau);
        for (i=0; i< tableau.length; i++)             /* Cette fonction vérifie que la bonne réponse n'est pas envoyé en dehors de la zone */
            {                                            /* utilisée c'est à dire dans ce cas tableau[0] à tableau[3], on pose la bonne réponse */
                if(tableau[i] == tableauDix[j])          /* en position tableau[0] à la fin de la fonction, après un shuffle */
                    {                                    /* le Si vérifie qu'il n'y aura pas de duplication de la bonne réponse, sans qui la réponse */
                        reponseRdm[i] = reponseRdm[0];
                        reponseRdm[0] = tableauDix[j];

       /* sera obligatoirement celle qui est doublée */
                    }                                    /* La réponse ne se trouvera pas toujours en position 0, on s'occupera de faire un shuffle*/
                else{                                    /* plus tard pour la rendre aléatoire parmis les 4 réponses */
                reponseRdm[i] = tableau[i];

                }
            }

        return reponseRdm;
    }

function Tableau2D()                                /* Fonction de création d'un tableau à deux dimensions sans laquelle je ne pourrais pas l'avoir*/
    {

        var tableau = new Array();                  /* Fonction basique aussi, on initialiser toutes les valeurs du tableau à 0 */

        for(var i=0; i<10; i++)                     /* Ce tableau me permettera d'avoir le numéro de la question et les 4 réponses */
            {
                tableau[i] = new Array();
            }

        for(var i=0; i<10; i++)
            {
                for(var j=0; j < 4; j++)
                    {
                        tableau[i][j] = 0;
                    }
            }
        return tableau;
    }

function questionReponseRandom(reponse, questionReponse)    /* Cette fonction rempli le tableau 2D avec les valeurs choisies aléatoirement précédemment*/
    {


        for(var i=0; i<10; i++)
            {

                reponse = reponseRandom(tableaudup, i);     /* à chaque changement de valeur de I, on recalcule les réponse en mettant à l'index 0 */
                for(var j=0; j < 4; j++)                    /* la bonne réponse à la question correspondante */
                    {                                       /* le for s'occupe de mettre les 4 premières réponse (Index 0 = bonne et Index 1,2,3 */
                        questionReponse[i][j] = reponse[j]; /* sont prises aléatoirement grâce à la fonction reponseRandom) */


                    }
                shuffle (questionReponse[i]);               /* On faire un Shuffle pour s'assurer que la première réponse ne sera pas toujours la bonne*/
            }
        return questionReponse;                             /* On retourne le tableau qui contient déjà toutes les questions et réponses*/
    }

function choixQuestion ()
    {
        for (i=0; i < tableauDix.length; i++)
            {
                console.log("Question " + (i+1) + "/10 : " + countries[tableauDix[i]]["name"] +"  ");
                console.log("Réponse : " + countries[tableauRep[i][0]]["name"] + "  " + countries[tableauRep[i][1]]["name"] +"  " + countries[tableauRep[i][2]]["name"] + "  " + countries[tableauRep[i][3]]["name"] + "  ");
            }
    }

/* Pour la fonction choixQuestion, on se contente simplement de reprendre les valeurs du tableau à deux dimensions créé précédement
en lui attribuant bien évidement les nom récupérer dans le tableau countries on affiche donc respéctivement :
La question (tableauDix[numéroQuestion]) en prenant dans ce cas ci le nom et pas le drapeau de la fonction
Les réponses qui sont elles contenue dans le tableau 2D :
tableauRep[0][0] 1ère question 1ère proposition
tableauRep[0][1] 1ère question 2ème proposition
tableauRep[1][0] 2ème question 1ère proposition  ect*/


 /* affiche donc l'ensemble des question - proposition dans la console */

function question(drapChoisis)
    {
        var im = document.querySelector("img");
        im.setAttribute("src", "img/drapeaux/" + countries[tableauDix[drapChoisis]]["flag"]);
        document.getElementById('1').innerHTML = ("value", countries[ tableauRep[drapChoisis][0] ] ["name"]);
        document.getElementById('2').innerHTML = ("value", countries[ tableauRep[drapChoisis][1] ] ["name"]);
        document.getElementById('3').innerHTML = ("value", countries[ tableauRep[drapChoisis][2] ] ["name"]);
        document.getElementById('4').innerHTML = ("value", countries[ tableauRep[drapChoisis][3] ] ["name"]);
        document.getElementById('numQuestion').innerHTML = ("Question " + (drapChoisis+1) + "/10   Score = " + score + "/10");
    }

/* Cette fonction est celle qui remplace l'img et les boutons pour correspondre à la question choisie en proposition
Si on appelle là fonction avec en paramètre les valeurs de 0 à 9 donneront respectivement les questions et proposition de 1 à 10
Elle s'occupe également d'afficher la question à laquelle on est, donc (Valeur en paramètre + 1 ) */

function onClickReponse(bouton)
    {
        if (nbRep == 0)                                                         // Vérifie si le joueur a déjà donné une réponse ou non
            {
                var butt = document.getElementById(bouton);                     // On récupère l'id du bouton activé
                var numBouton;                                                  // On remplace la valeur de numBouton par la valeur équivalente dans le tableau2D
                switch(bouton)                                                  // grâce au switch case
                    {
                        case "1":
                            numBouton = 0;
                        break;
                        case "2":
                            numBouton = 1;
                        break;
                        case "3":
                            numBouton = 2;
                        break;
                        case "4":
                            numBouton = 3;
                        break;
                    }

                if (tableauRep[q][numBouton] == tableauDix[q])                  // On compare la réponse du bouton avec le drapeau
                    {
                        butt.style.backgroundColor = "#17EA00";                 // Si c'est vrai on change sa couleur en vert et on ajoute un point au score
                        score= score + 1;
                    }
                else
                    {
                        butt.style.backgroundColor = "#CA0F28"                  // si c'est faux on change sa couleur en rouge et on recherche la bonne réponse
                        for(i=1; i<5; i++)                                      // pour changer sa couleur en vert
                            {
                                var faux = document.getElementById(i);
                                if (tableauRep[q][(i-1)] == tableauDix[q])
                                    {

                                        faux.style.backgroundColor = "#17EA00";
                                    }
                            }
                    }
                console.log("score = "+ score);
                document.getElementById("Suivant").innerHTML = ("<button id=\"suivantB\" onclick=\"questionSuiv()\">Suivant</button>");
            }
        nbRep = nbRep +1;
    }

    function questionSuiv()
        {
            q =q+1;                                                                         //On passe à la question suivante
            for(i=1; i<5; i++)                                                      // On remet toutes les couleurs de background des boutons à la couleur initiale
                        {
                            var faux = document.getElementById(i);
                            faux.style.backgroundColor = "#ffffff";
                        }
            document.getElementById("Suivant").innerHTML = ("");                    // On enlève le bouton Suivant
            if(q < 10)
                {
                    question(q);                                                           // On réinitialise le nombre de réponse donnée par l'utilisateur
                    nbRep = 0;

                }
            else                                                                             // si q = 10 on retire tout les boutons et le drapeau pour afficher la phrase avec le score
                {                                                                            // ainsi que les 2 boutons permeta
                    
                    var imag = document.getElementById("drapeaux");
                    imag.style.display = "none";
                    var reponses = document.getElementsByClassName("reponse"), i;
                    for (var i = 0; i < reponses.length; i++)
                    {
                            reponses[i].style.display = "none";
                    }
                    document.getElementById("fin").innerHTML = ("Le questionnaire est terminé ! vous avez effectué un score de " + score + "/10");
                    document.getElementById("retry").innerHTML = ("<button onclick ='window.location=\"jeu.html\"' class='reponse'>Recommencer</button>");
                    document.getElementById("index").innerHTML = ("<button onclick =\"window.location='index.html'\" class='reponse'>Changer de région</button>");
                    document.getElementById('numQuestion').innerHTML = ("Question 10/10   Score = " + score + "/10");
                }
        }

        var q=0;
        var score = 0;
        var nbRep = 0;
        var filtred = trierRegion(countries,choix);                     /* Créer le tableau filtred en fonction de la région choisie */
        shuffle(filtred);                                               /* Randomise le tableau filtred */
        tableauDix = randomedTableau(filtred,10);                       /* Recopie les 10 premières valeurs du tableau filtred pour les questions */
        var tableaudup = randomedTableau(filtred, filtred.length);      /* Créé le tableau dupliqué qui servira aux réponses */
        var reponseRdm;
        var questionReponse = Tableau2D();                              /* Créé le tableau 2D qui contiendra les réponses */
        var tableauRep = Tableau2D();
        var tableauRep = questionReponseRandom(reponseRdm, questionReponse);        /* Assigne les valeurs des réponses au tableau 2D grâce au tableaudup */
        //console.log(choixQuestion());                                    /* Affiche dans la console toutes les questions/réponses */
        question(q);                                                        /* Affiche le drapeau ainsi que les réponses correspondantes à la question 1 */
