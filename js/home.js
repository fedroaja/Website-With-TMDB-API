$(document).ready(function(){
	var settings = {
  	"async": true,
  	"crossDomain": true,
  	"url": "https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=0d01da6c0d54676a717cec0e73c9bd74",
  	"method": "GET",
  	"headers": {},
  	"data": "{}"
}

	$.ajax(settings).done(function (results) {
  		var tbody  = $(".tbodi");
  		var tr = $("<tr>");
  		var tr1 = $("<tr>");
  		var tr2 = $("<tr>");
  		var tr3 = $("<tr>");
  		var tr4 = $("<tr>");
  		tbody.empty();
  	
  		$.each(results.results,function(i,menu){
  				var idx = i;
  				var titles = menu.title;
  				var idm = menu.id;
				var posterURL = menu.poster_path;
				var release = "( "+menu.release_date+" )";
				var gambar = "http://image.tmdb.org/t/p/w185/"+posterURL;
  				var td = $("<td>");
  				var td1 = $("<td>");
  				var td2 = $("<td>");
  				var td3 = $("<td>");
  				var td4 = $("<td>");
  				var clas = "kotak";
  				var btn = "btn";
  				var judul = "jud";
  				var rilis = "tgl";
  				var isi = "detail("+idm+")";
  			
				
				
				if(idx < 4)
				{
					td.append("<div class="+clas+"><img src="+gambar+" class='img-responsive'><h4 class="+judul+"><strong>"+titles+"</strong></h4><h6 class="+rilis+">"+release+"</h6><button class="+btn+" onclick="+isi+">Detail</button></div>")
					tr.append(td);
					tbody.append(tr);
					
				}
				if(idx > 3 && idx < 8)
				{
					td1.append("<div class="+clas+"><img src="+gambar+" class='img-responsive'><h4 class="+judul+"><strong>"+titles+"</strong></h4><h6 class="+rilis+">"+release+"</h6><button class="+btn+" onclick="+isi+">Detail</button></div>")
					tr1.append(td1);
					tbody.append(tr1);
				}
				if (idx > 7 && idx < 12) 
				{
					td2.append("<div class="+clas+"><img src="+gambar+" class='img-responsive'><h4 class="+judul+"><strong>"+titles+"</strong></h4><h6 class="+rilis+">"+release+"</h6><button class="+btn+" onclick="+isi+">Detail</button></div>")
					tr2.append(td2);
					tbody.append(tr2);
				}
				if (idx > 11 && idx < 16) 
				{
					td3.append("<div class="+clas+"><img src="+gambar+" class='img-responsive'><h4 class="+judul+"><strong>"+titles+"</strong></h4><h6 class="+rilis+">"+release+"</h6><button class="+btn+" onclick="+isi+">Detail</button></div>")
					tr3.append(td3);
					tbody.append(tr3);
				}
				if (idx > 15 && idx < 20) 
				{
					td4.append("<div class="+clas+"><img src="+gambar+" class='img-responsive'><h4 class="+judul+"><strong>"+titles+"</strong></h4><h6 class="+rilis+">"+release+"</h6><button class="+btn+" onclick="+isi+">Detail</button></div>")
					tr4.append(td4);
					tbody.append(tr4);
				}
  			
			
  		})
  	

		
	});
	
		
})

function detail(id){
	localStorage.setItem("nama", id);
	window.location.href="detail.html";

}


	
