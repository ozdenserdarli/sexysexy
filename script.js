var ourIds = ["9985","10194","10040","10081","10013","10062","10063","10189","10014","10110"];

for(var i = 0; i < ourIds.length; i++) {
    
    var filmId = ourIds[i];

    
    
    $.ajax({
        url: "http://api.stockholmfilmfestival.se/v1/films/film/film_id/"+filmId+"/format/json/API-Key/YQ8UtQp5fCQIDAknJLVXZLWvAcsWjpa86XPml3eH",
        dataType: "json",
        header: {'X-API-KEY': 'YQ8UtQp5fCQIDAknJLVXZLWvAcsWjpa86XPml3eH'},
        success: function(result) {
            var myCountry="Sweden";
            if (result.filmCountry_en==myCountry) 
                console.log(result.filmCountry_en);
        },
        done:function(result){
        	//console.log(result);
        }
    });
}
