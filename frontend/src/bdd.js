

// -----------------------------------------------------
// **********   BADE DE DONNEES DES COURS **************
// -----------------------------------------------------

const bddCours = {

   
        
        //  MINI-SPIDER 
      miniSpider :  {   
            typeCours : "regulier",
            nomCours : "Mini-Spider",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Mini-Spider.png"),
            ageCours : [4,5,6,7],
            ageString : "4 à 7 ans",
            infoCarte : "4 à 7 ans",
            jour : "Lundi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 840,
            prixNormal : "price_1JtbP3L33Mz5kFdVAZhHc6IM",
            prixRabais_10 : "price_1JtbUhL33Mz5kFdV0yDuYOkA",
            prixRabais_15 : "price_1JtbVvL33Mz5kFdVReeioDiE",
            prixRabais_20 : "price_1JtbWbL33Mz5kFdVA4o4LG1o",
            rabais : 0,
            prixAPaye : 0,
            valeurAbo : "CHF 290.-",
            datesCours2020 : "06-09 / 13-09 / 20-09 / 27-09 / 04-10 / 11-10 / 25-10 / 08-11 / 15-11 / 22-11 / 29-11 / 06-12 / 13-12 / 20-12",
            datesCours2021 : "10-01 / 17-01 / 24-01 / 31-01 / 07-02 / 14-02 / 21-02 / 07-03 / 14-03 / 21-03 / 28-03 / 04-04 / 11-04 / 25-04 / 02-05 / 09-05",
            descriptionCour : "Ce cours est ludique et axé sur des jeux, développement de l'équilibre, coordination, souplesse. Leurs données tous les atouts pour qu'ils puissent s'épanouir dans les meilleures conditions qu'il soit !  ",          
        },
        //  GECKO
      gecko :  {
            typeCours : "regulier",
            nomCours : "Gecko",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Gecko.png"),
            ageCours  : [7,8,9,10,11],
            ageString : "7 à 11 ans",
            infoCarte : " 7 à 11 ans",
            jour : "Mardi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 840,
            prixNormal : "price_1JtblkL33Mz5kFdVWN7N0WPG",
            prixRabais_10 : "price_1JtbmCL33Mz5kFdVS6FJJeZP",
            prixRabais_15 : "price_1JtbmzL33Mz5kFdVD9QMqLIX",
            prixRabais_20 : "price_1JtbnQL33Mz5kFdVF3TuRpS4",
            rabais : 0,
            prixAPaye : 0,
            valeurAbo : "CHF 290.-",
            datesCours2020 : "07-09 / 14-09 / 21-09 / 28-09 / 05-10  / 12-10 / 26-10 / 02-11 / 09-11 / 16-11 / 23-11 / 30-11 / 07-12 / 14-12 / 21-12",
            datesCours2021 : "11-01 / 18-01 / 25-01 / 01-02 / 08-02 / 15-02 / 22-02 / 08-03 / 15-03 / 22-03 / 29-03 / 05-04 / 12-04 / 26-04 / 03-05",
            descriptionCour : "Dans ce cours, entre l'enfance et l'adolescence. Nous commencerons à diriger l'enfant vers une certaine autonomie. Nous apprendrons les différentes techniques d'assurage, nous développerons la gestuel de l'escalade, le dynamisme, la coordination et bien plus encore !!",
            isDateCours : true,
       
        },
        //  MONKEY
       monkey : {
            typeCours: "regulier",
            nomCours : "Monkey",
            image : require("@/assets/images/header.jpg"),
            coursPdf : require("@/assets/fichier/date-Monkey.png"),
            ageCours : [11,12,13,14,15,16],
            ageString : "11 à 16 ans",
            infoCarte : "11 à 16 ans",
            jour : "Jeudi",
            heure : "17h30 à 19h",
            nbrCours : 30,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 840,
            prixNormal : "price_1JtboaL33Mz5kFdVneGS4zEH",
            prixRabais_10 : "price_1JtborL33Mz5kFdVu5j8c3OC",
            prixRabais_15 : "price_1JtbpGL33Mz5kFdVPAUF3Dld",
            prixRabais_20 : "price_1JtbpWL33Mz5kFdVM9ZkglVy",
            rabais : 0,
            prixAPaye : 0,
            valeurAbo : "CHF 290.-",
            datesCours2020 : "02-09 / 09-09 / 16-09 / 23-09 / 30-09 / 07-10 / 28-10 / 04-11 / 11-11 / 18-11 / 25-11 / 02-12 / 09-12 / 16-12 / 23-12",
            datesCours2021 : "13-01 / 20-01 / 27-01 / 03-02 / 10-02 / 17-02 / 24-02 / 10-03 / 17-03 / 24-03 / 31-03 / 07-04 / 14-04 / 28-04 / 05-05",
            descriptionCour : "Dans ce cours pour les adolescents. Nous pratiquerons toutes les disciplines de l'escalade indoor ( bloc , voie , vitesse ). Nous chercherons à perfectionner les placements du corps dans l'espace, nous développerons le rapport poids puissance tout en travaillant la souplesse, l'équilibre et la coordination. ",
            isDateCours : true,
       
        },
    
    
      superMonkey :  {
            typeCours : "regulier",
            nomCours : "Big-Monkey",
            image : require("@/assets/images/header.jpg"),
            ageString : "16 à 99 ans",
            infoCarte : " 16 à 99 ans",
            jour : "Jeudi",
            heure : "19h30 à 21h",
            nbrCours : 15,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :420,
            rabais : 0,
            prixAPaye : 0,
            prixNormal : "price_1JtbqiL33Mz5kFdVUyaY8qGr",
            valeurAbo : "CHF 370.-",
            // datesCours2020 : "06-09 / 13-09 / 20-09 / 27-09 / 04-10 / 11-10 / 08-11 / 15-11 / 22-11 / 29-11 / 06-12 / 13-12 / 20-12",
            datesCours2021 : "13-01 / 20-01 / 27-01 / 03-02 / 10-02 / 17-02 / 24-02 / 10-03 / 17-03 / 24-03 / 31-03 / 07-04 / 14-04 / 28-04 / 05-05",
            descriptionCour : "Dès le 13 janvier 2022, Monkey-School ouvre une classe de cours réguliers adultes. Novice, avancé ou expert, partageons ensemble un moment convivial tout en évoluant dans ce magnifique sport... ",
            isDateCours : true,
         
        },
   
   
        privee : {
            typeCours : "prive",
            nomCours : "Privé",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "4 à 99 ans",
            ageString : "4 à 99 ans",
            infoCarte : " 4 à 99 ans",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : "Illimité",
            dureeCours : "min. 1 heure",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : "80.- / heure",
            descriptionCour : "Cours à la carte !! Débutant, avancé ou expert. Vous voulez grimper à votre rythme, sans vous soucier du jour ou de l'heure et avoir un prof rien que pour vous ? Ce cours est fait pour vous !! Nous nous adapterons à votre niveau et travaillerons ensemble afin que vous puissiez être meilleur que la veille. ",
            isDateCours : false,
           
        },
   
   
        cb1 : {
            typeCours : "autonomie",
            nomCours : "CB1",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "7 à 99 ans",
            ageString : "7 à 99 ans",
            infoCarte : "Assurage en moulinette !",
            jour : "selon dates prévu",
            heure : "10h à 12h",
            nbrCours : 3,
            dureeCours : "2 heures",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prixCours : 190,
            choiceDateCours : [
                "13 novembre 2021",
                "16 deécembre 2021",
                "04 janvier 2021",
                "13 novembre 2021",
            ] ,
            descriptionCour : "Ceci est le cours prvée...",
            isDateCours : true,
           
        },
        cb2 :  {
            typeCours : "autonomie",
            nomCours : "CB2",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "4 à 99 ans",
            ageString : "7 à 99 ans",
            infoCarte : "Assurage en tête !",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : 3,
            dureeCours : "2 heures",
            lieux : "Salle d'escalade de la Moubra",
            prix :"CHF 80.- / heure",
            datesCours2020 : "07-09 / 12-09 / 13-09",
            datesCours2021 : "07-01 / 12-01 / 13-01",
            descriptionCour : "Ceci est le cours prvée...",
            afficheDate : false,
        
        },   
        famille :  {
            typeCours : "famille",
            nomCours : "Famille",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "7 à 99ans",
            ageString : "famille",
            infoCarte : "Toute la famille",
            jour : "7 / 7",
            heure : "entre 8 et 20h",
            nbrCours : 1,
            dureeCours : "1h30",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix :150,
            rabais : 0,
            descriptionCour : "Ceci est le cours famille",
            isDateCours : false,
     
        },
        noel : {
            typeCours : "Event",
            nomCours : "Noel",
            image : require("@/assets/images/header.jpg"),
            ageCours  : "6 à 16 ans",
            ageString : "6 à 16 ans",
            infoCarte : "6 à 16 ans",
            jour : "Période de Noël",
            datesCours2021 : "01.01 / 02.02 / 03.01 / 04.01 / 05.01 / 06.01 / 07.01",
            datesCours2020 : "23.12 / 24.12 / 25.12 / 26.12 / 27.12 / 28.12 / 29.12 / 30.12 / 31.12",
            choiceDateCours : [
             
                new Date(2021,11,23,6),
                new Date(2021,11,24,6),
                new Date(2021,11,25,6),
                new Date(2021,11,26,6),
                new Date(2021,11,27,6),
                new Date(2021,11,28,6),
                new Date(2021,11,29,6),
                new Date(2021,11,30,6),
                new Date(2021,11,31,6),
                new Date(2022,0,1,6),
                new Date(2022,0,2,6),
                new Date(2022,0,3,6),
                new Date(2022,0,4,6),
                new Date(2022,0,5,6),
                new Date(2022,0,6,6),
                new Date(2022,0,7,6),     
            ],
            dateChoisie  : [],
            heure : "15 à 18h",
            nbrCours : "1",
            dureeCours : "3 heures",
            lieux : "Crans-Montana, salle d'escalade de la Moubra ",
            prix : 80,
            rabais : 0,
            prixNormal : "price_1JtEDnL33Mz5kFdVI8STS75P",
            prixAPaye : 0,     
            descriptionCour : "Pour tous niveaux. Durant la période de Noël un professeur d'escalade sera présent de 15h à 18h pour encadrer le groupe ( 8 personnes maximum ). La présence d'un adulte n'est pas obligatoire ( 3 heures de grimpe avec prof. pour seulement CHF. 80.- )",
            isDateCours : false,           
        },
}

export {bddCours}