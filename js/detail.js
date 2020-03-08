$(document).ready(function(){
	var idm = localStorage.getItem("nama");
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/"+idm+"?language=en-US&api_key=0d01da6c0d54676a717cec0e73c9bd74",
  "method": "GET",
  "headers": {},
  "data": "{}"
}
 
$.ajax(settings).done(function (response) {
  console.log(response);
  	var lay = $("#kotak");
  	var judul = response.title;
  	var urlBg = response.backdrop_path;
  	var urlPstr = response.poster_path;
  	var release = response.release_date;
    var ov = response.overview;
    var bdgt = response.budget;
    var cn=[]
  	var bg = "http://image.tmdb.org/t/p/w1280"+urlBg;
  	var pstr = "http://image.tmdb.org/t/p/w300"+urlPstr;
    $.each(response.production_companies,function(i,menu){
      cn.push(" "+menu.name) ;
      
    })
    console.log(cn);
  	lay.append("<div><img src='"+pstr+"' class='img-responsive' alt='Cinque Terre'></div>");
        lay.append("<p id='jud'><strong id='judul'>"+judul+"</strong><br><br>("+release+")<br><br><strong>Description :</strong><br>"+ov+"<br><br><strong>Budget :</strong>$ "+bdgt+"<br><br><strong>Production Companies :</strong> "+cn+"<br><br><br><button id='trailer' class='btn-success btn-lg' onclick='vds()' data-toggle='modal' data-target='#modalDescription'>Trailer</button></p>");
        $("body").css({"background-image":"url("+bg+")","background-size":"cover","background-attachment":"fixed","background-repeat":"no-repeat","background-blend-mode":"multiply"});
  });
 


})
  function vds(){
   var idm = localStorage.getItem("nama");
   var settings2= {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/"+idm+"/videos?language=en-US&api_key=0d01da6c0d54676a717cec0e73c9bd74",
  "method": "GET",
  "headers": {},
  "data": "{}"
}
 $.ajax(settings2).done(function (response2) {
  var menu = response2.results;
  var VidUrl = menu[0].key;
  var vid = "<object id='vdo' width='1044' height='508' data='https://www.youtube.com/embed/"+VidUrl+"?&loop=1'></object>";
  $(".modal-body").append(vid);

});
      
}
  function pause(){
    $("#vdo").remove();
  }
  $(function(){
    $('#modalDescription').modal({
        show: false
    }).on('hidden.bs.modal', function(){
    $("#vdo").remove();
    });
});


