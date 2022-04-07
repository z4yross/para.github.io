//Image dir
var imageDir = 'img/';

//Animals dir
var imageAnimalsDir = 'img/animales/';

//Parasits dir
var imageParasitsDir = 'img/parasitos/';

//Parasits dir
/*var videosDir = 'videos/';*/

// Animals groups
var groups = {
     "rumi": {"name": "Rumiantes", "img": "vaca.png"},
     "equi": {"name": "Equinos", "img": "caballo.png"},
     "porc": {"name": "Porcinos", "img": "cerdo.png"},
     "cani": {"name": "Caninos", "img": "perro.png"},
     "feli": {"name": "Felinos", "img": "gato.png"},
     "aves": {"name": "Aves", "img": "gallina.png"},     
   };

//Get url parameter
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

//Get animal from GET variable
var getAnimal = function getAnimal() {

  var param = getUrlParameter('a');

  switch(param) {
    case "rumi" : return rumiantes;
    case "equi" : return equinos;
    case "porc" : return porcinos;
    case "cani" : return caninos;
    case "feli" : return felinos;
    case "aves" : return aves;
    default : return rumiantes;
  }

}

//Get parasit from GET variable
var getParasit = function getParasit() {

  var param = getUrlParameter('p');

  switch(param) {
    case "aedes" : return aedes;
    case "alphitobius" : return alphitobius;
    case "amblyomma" : return amblyomma;
    case "anaplasma" : return anaplasma;
    case "ancylostoma" : return ancylostoma;
    case "anoplocephala" : return anoplocephala;
    case "argas" : return argas;
    case "ascaridiagalli" : return ascaridiagalli;
    case "ascarissuum" : return ascarissuum;
    case "babesia" : return babesia;
    case "boophilus" : return boophilus;
    case "bunostomum" : return bunostomum;
    case "cellulosae" : return cellulosae;
    case "chabertia" : return chabertia;
    case "cheyletiella" : return cheyletiella;
    case "chorioptes" : return chorioptes;
    case "cochliomyia" : return cochliomyia;
    case "cooperia" : return cooperia;
    case "cryptosporidium" : return cryptosporidium;
    case "ctenocephalides" : return ctenocephalides;
    case "culex" : return culex;
    case "cysticercus" : return cysticercus;
    case "cysticercus_t" : return cysticercus_t;
    case "damalinia" : return damalinia;
    case "davainea" : return davainea;
    case "demodex" : return demodex;
    case "dermacentor" : return dermacentor;
    case "dermanyssus" : return dermanyssus;
    case "dermatobia" : return dermatobia;
    case "dicrocoelium" : return dicrocoelium;
    case "dictyocaulus" : return dictyocaulus;
    case "dioctophymarenale" : return dioctophymarenale;
    case "dipylidium" : return dipylidium;
    case "dirofilariaimmitis" : return dirofilariaimmitis;
    case "echidnophaga" : return echidnophaga;
    case "eimeria" : return eimeria;
    case "epidermoptes" : return epidermoptes;
    case "fannia" : return fannia;
    case "fasciola" : return fasciola;
    case "felicola" : return felicola;
    case "gasterophilus" : return gasterophilus;
    case "giardia" : return giardia;
    case "haematobia" : return haematobia;
    case "haematopinus" : return haematopinus;
    case "haemobartonella" : return haemobartonella;
    case "haemonchus" : return haemonchus;
    case "hepatozoon" : return hepatozoon;
    case "heterakisgallinarum" : return heterakisgallinarum;
    case "heterodoxus" : return heterodoxus;
    case "isospora" : return isospora;
    case "ixodes" : return ixodes;
    case "knemidocoptes" : return knemidocoptes;
    case "leishmania" : return leishmania;
    case "leucocytozoon" : return leucocytozoon;
    case "linguatula" : return linguatula;
    case "linognathus" : return linognathus;
    case "lipeurus" : return lipeurus;
    case "lutzomyia" : return lutzomyia;
    case "macracanthorhynchus" : return macracanthorhynchus;
    case "mecistocirrus" : return mecistocirrus;
    case "melophagus" : return melophagus;
    case "menacanthus" : return menacanthus;
    case "menopon" : return menopon;
    case "metastrongylus" : return metastrongylus;
    case "moniezia" : return moniezia;
    case "musca" : return musca;
    case "nematodirus" : return nematodirus;
    case "neospora" : return neospora;
    case "notoedres" : return notoedres;
    case "oesophagostomum" : return oesophagostomum;
    case "oestrus" : return oestrus;
    case "ornithodoros" : return ornithodoros;
    case "ornithonyssus" : return ornithonyssus;
    case "ostertagia" : return ostertagia;
    case "otobius" : return otobius;
    case "otodectes" : return otodectes;
    case "oxyurisequi" : return oxyurisequi;
    case "panstrongylus" : return panstrongylus;
    case "paragonimus" : return paragonimus;
    case "paramphistomum" : return paramphistomum;
    case "paranoplocephala" : return paranoplocephala;
    case "parascarisequorum" : return parascarisequorum;
    case "psoroptes" : return psoroptes;
    case "pulex" : return pulex;
    case "raillietina" : return raillietina;
    case "rhipicephalus" : return rhipicephalus;
    case "rhodnius" : return rhodnius;
    case "saginata" : return saginata;
    case "sarcoptes" : return sarcoptes;
    case "simulium" : return simulium;
    case "stephanurus" : return stephanurus;
    case "stomoxys" : return stomoxys;
    case "strongylus" : return strongylus;
    case "tabanus" : return tabanus;
    case "theileria" : return theileria;
    case "toxascarisleonina" : return toxascarisleonina;
    case "toxocaravitulorum" : return toxocaravitulorum;
    case "toxocaracanis" : return toxocaracanis;
    case "toxoplasma" : return toxoplasma;
    case "triatoma" : return triatoma;
    case "trichodectes" : return trichodectes;
    case "trichostrongylus" : return trichostrongylus;
    case "trichuris" : return trichuris;
    case "trypanosoma" : return trypanosoma;
    case "tunga" : return tunga;
    default : return aedes;
  }

}
  
$(document).ready(function() {

  //Index
  if($('body').hasClass('index')){

    if($('.animals').length){

      var animalStruture = '<div class=\'col-md-4\'><div class=\'animal\'><a href=\'{link}\'><h2>{name}</h2><img src=\'{image}\' class=\'img-responsive\' ></a></div></div>';

      $.each(groups, function (index, value) {

        var animal = animalStruture;
        animal = animal.replace('{link}', 'animales.html?a=' + index).replace('{name}', value.name).replace('{image}', imageAnimalsDir + value.img);
        
        $('.animals').append(animal);

      });

    }

  }
  //End index

  //Animals page
  if($('body').hasClass('animals')){

    var animal = getAnimal();

    //Breadcrumb
    if($('ol.breadcrumb').length){
      $('ol.breadcrumb').append('<li class=\'breadcrumb-item active\'>' + animal.name + '</li>');
    }

    //Animals
    if($('#parasitas-accordion').length){

      var accordionStruture = '<div class=\'panel panel-default\'><div class=\'panel-heading\' role=\'tab\' id=\'{heading}\'><h4 class=\'panel-title\'><a class=\'collapsed\' role=\'button\' data-toggle=\'collapse\' data-parent=\'#parasitas-accordion\' href=\'#{collapse}\' aria-expanded=\'true\' aria-controls=\'{collapse}\'>{area-name}</a></h4></div><div id=\'{collapse}\' class=\'panel-collapse collapse\' role=\'tabpanel\' aria-labelledby=\'{heading}\'><div class=\'panel-body\'><ul></ul></div></div></div>';
      var listStruture = '<li><a href=\'{parasita-link}\'>{parasita-name}</a></li>';

      $.each(animal.areas, function (index, value) {

        var animalStructure = accordionStruture;

        animalStructure = animalStructure.replace(new RegExp('{heading}', 'g'), 'heading_' + index)
                                         .replace(new RegExp('{collapse}', 'g'), 'collapse_' + index)
                                         .replace('{area-name}', value.name);

        $('#parasitas-accordion').append(animalStructure);

        var parasitas = $('#parasitas-accordion #' + 'collapse_' + index).find('ul');

        $.each(value.parasitas, function (index2, value2) {

          var parasita = listStruture;

          parasita = parasita.replace('{parasita-name}', value2.name)
                             .replace('{parasita-link}', value2.link);
          parasitas.append(parasita)

        });
      });
    }

    //Animal photo
    if($('.animal-content').length){
      $('.animal-content h1').html(animal.name);
      $('.animal-content .content').append('<img src=\'' + imageAnimalsDir + animal.image + '\' class=\'img-responsive\' >');
    }

    //Animals parasits
    if($('#owl-demo').length){

      var carrosselStructure = '<div class=\'item\'><a href=\'{link}\'><img src=\'{image}\' alt=\'Owl Image\'>{name}</a></div>';


      $.each(animal.carrossel, function (index, value) {

        var parasitaStructure = carrosselStructure;

        parasitaStructure = parasitaStructure.replace('{link}', value.link)
                                             .replace('{image}', imageParasitsDir + value.image)
                                             .replace('{name}', value.name);

        $('#owl-demo').append(parasitaStructure);
      });

      $('#owl-demo').owlCarousel({
 
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
       
      });

    }

  }

  //End animals

  //Parasits page
  if($('body').hasClass('parasits')){

    var parasit = getParasit();
    //var parasit = sarcoptes;

    //console.log(parasit);

    //Breadcrumb
    if($('ol.breadcrumb').length){
      $('ol.breadcrumb').append('<li class=\'breadcrumb-item active\'>' + parasit.name + '</li>');
    }

    //Disease
    $('.disease').append('<p>' + parasit.disease + '</p>');

    //Morphology
    if($('div.morphology').length){

      var itemStructure = '<div class=\'item\'><div><img src=\'{image}\'><p>{description}</p></div></div>';

      $.each(parasit.morphology, function (index, value) {

        var item = itemStructure;

        item = item.replace('{image}', imageParasitsDir + parasit.id + '/' + value.image)
                   .replace('{description}', value.description);

        $('#owl-demo1').append(item);
      });

      $('#owl-demo1').owlCarousel({
 
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
       
      });
      
      $('#owl-demo1 .owl-prev').html('Anterior');
      $('#owl-demo1 .owl-next').html('Siguiente');

    }

    //Taxonomy
    if($('div.taxonomy').length){
      var tableLineStructure = '<tr><td>{filo}</td><td>{item}</td></tr>';

      $.each(parasit.taxonomy, function (index, value) {

        line = tableLineStructure;

        line = line.replace('{filo}', index)
                   .replace('{item}', value);

        $('.taxonomy .table tbody').append(line);

      });
    }

    //Diagnostic
    if($('div.diagnostic').length){
      $('.diagnostic').append('<p>' + parasit.diagnostic + '</p>');
    }

    //Life cicle
    if($('div.lifeCicle').length){
      $('.lifeCicle').append('<div><video poster=\'videos/video-placeholder.png\' controls><source src=\'' + videosDir + parasit.lifeCicle + '\' type=\'video/mp4\'></video></div>');
    }
  }

});