/* ========================================================================== */
/* DATA
----------------------------------------------------------------------------- */
var characters = [
    {id: 1, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:20 , name:'Bellwether'                  , race:'Mouton'             , job:'Assistante du Maire'},
    {id: 2, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:31 , name:'Benjamin Clawhauser'         , race:'Guépard'            , job:'Agent d\'accueil du commisariat'},
    {id: 3, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:76 , name:'Bonnie & Stuart Hopps'       , race:'Lapin'              , job:'Parents de Judy'},
    {id: 4, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:32 , name:'Bucky & Pronk Oryx-Antlerson', race:'Oryx'               , job:'Voisin de Judy'},
    {id: 5, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:46 , name:'Delchaton'                   , race:'Lion'               , job:'Officier de police'},
    {id: 6, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:60 , name:'Dharma Armadillo'            , race:'Tatou'              , job:'Logeuse de l\'appartement de Judy'},
    {id: 7, flag:1 , role:'thug', position:{lat:38.929, lng:-76.863}, age:34 , name:'Doug'                        , race:'Mouton'             , job:'Chimiste'},
    {id: 8, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:25 , name:'Duke Weaselton'              , race:'Belette'            , job:'Informateur'},
    {id: 9, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:22 , name:'Emmitt Otterton'             , race:'Loutre'             , job:'Porté disparu'},
    {id:10, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:57 , name:'Fabienne Growley'            , race:'Léopard des neiges' , job:'Journaliste sur ZNN'},
    {id:11, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:15 , name:'Finnick'                     , race:'Fennec'             , job:'Arnaqueur'},
    {id:12, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:53 , name:'Flash Slothmore'             , race:'Paresseux'          , job:'Fonctionnaire'},
    {id:13, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:21 , name:'Francine Pennington'         , race:'Éléphant'           , job:'Agent de police'},
    {id:14, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:66 , name:'Fru Fru'                     , race:'Musaraigne arctique', job:'Fille de Mister Big'},
    {id:15, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:17 , name:'Gareth'                      , race:'Mouton blanc'       , job:'Étudiant'},
    {id:16, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:23 , name:'Gary'                        , race:'Loup'               , job:'Gardien de l\'asile'},
    {id:17, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:25 , name:'Gazelle'                     , race:'Gazelle'            , job:'Chanteuse'},
    {id:18, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:26 , name:'Gideon Grey'                 , race:'Renard'             , job:'Boulanger itinérant'},
    {id:19, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:61 , name:'Grizzoli'                    , race:'Loup blanc'         , job:'Officier de police'},
    {id:20, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:31 , name:'Gromayer'                    , race:'Tigre du Bengale'   , job:'Officier de police'},
    {id:21, flag:1 , role:'fbi' , position:{lat:38.867, lng:-77.005}, age:55 , name:'Higgins'                     , race:'Hippopotame'        , job:'Officier de police'},
    {id:22, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:10 , name:'Jaguar (Bobby Catmull)'      , race:'Jaguar'             , job:'Comédien de théâtre'},
    {id:23, flag:1 , role:'fbi' , position:{lat:38.872, lng:-77.065}, age:25 , name:'Judy Hopps'                  , race:'Lapin'              , job:'Officier de police'},
    {id:24, flag:1 , role:'thug', position:{lat:38.900, lng:-77.000}, age:37 , name:'Koslov'                      , race:'Ours polaire'       , job:'Homme de main de Mister Big'},
    {id:25, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:36 , name:'Larry'                       , race:'Loup'               , job:'Gardien de l\'asile'},
    {id:26, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:64 , name:'Chef Bogo'                   , race:'Buffle'             , job:'Sergent de police'},
    {id:27, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:18 , name:'Loufard'                     , race:'Loup gris'          , job:'Officier de police'},
    {id:28, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:22 , name:'Madame Otterton'             , race:'Loutre'             , job:'Épouse d\'Emmitt'},
    {id:29, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:50 , name:'Leodore Lionheart'           , race:'Lion'               , job:'Maire de Zootopie'},
    {id:30, flag:1 , role:'thug', position:{lat:38.850, lng:-76.950}, age:85 , name:'Mister Big'                  , race:'Musaraigne arctique', job:'Chef de la mafia à Toundraville'},
    {id:31, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:68 , name:'Nangi'                       , race:'Éléphant'           , job:'Professeur de yoga'},
    {id:32, flag:0 , role:'thug', position:{lat: 0.000, lng:  0.000}, age:20 , name:'Nick Wilde'                  , race:'Renard'             , job:'Arnaqueur'},
    {id:33, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:42 , name:'McCorne'                     , race:'Rhinocéros'         , job:'Officier de police'},
    {id:34, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:34 , name:'Peter Moosebridge'           , race:'Caribou'            , job:'Journaliste sur ZNN'},
    {id:35, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:55 , name:'Priscilla Tripletoe'         , race:'Paresseux'          , job:'Fonctionnaire'},
    {id:36, flag:1 , role:'thug', position:{lat:38.870, lng:-77.150}, age:48 , name:'Raymon & Michel'             , race:'Ours polaire'       , job:'Homme de main de Mister Big'},
    {id:37, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:22 , name:'Renato Manchas'              , race:'Panthère'           , job:'Témoin'},
    {id:38, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:38 , name:'Rugis'                       , race:'Ours polaire'       , job:'Officier de police'},
    {id:39, flag:0 , role:'fbi' , position:{lat: 0.000, lng:  0.000}, age:32 , name:'Sergent Instructeur'         , race:'Ours polaire'       , job:'Officier de police'},
    {id:40, flag:0 , role:'zzz' , position:{lat: 0.000, lng:  0.000}, age:48 , name:'Sharla'                      , race:'Mouton noir'        , job:'Étudiante'}
];

/* ========================================================================== */
/* SIDENAV MenotteBox (prison)
----------------------------------------------------------------------------- */
function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* ========================================================================== */
/* Google Maps api
----------------------------------------------------------------------------- */

var markers = [];
var map;
/* -------------------------------------------------------------------------- */
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom       : 11,
        center     : {lat: 38.897877, lng: -77.036520},
        scrollwheel: false
    });
}
/* -------------------------------------------------------------------------- */
function drop() {
    clearMarkers();
    for (var i = 0; i < characters.length; i++) {
        if(characters[i].flag == 1) {
            addMarkerWithTimeout(characters[i], i * 250);
        }
    }
}
/* -------------------------------------------------------------------------- */
function addMarkerWithTimeout(characters, timeout) {
    var image;
    if(characters.role == 'thug') { image = 'img/picto_thug.png';
    } else                        { image = 'img/picto_fbi.png';
    }

    window.setTimeout(function() {

        let m = new google.maps.Marker({
            position: characters.position,
            map: map,
            icon: image,
            title: characters.name,
            animation: google.maps.Animation.DROP
        });

        m.addListener('click', function() {
            $('#mod'+characters.id).modal('toggle');
        });
        markers.push(m);
    }, timeout);
}
/* -------------------------------------------------------------------------- */
function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
