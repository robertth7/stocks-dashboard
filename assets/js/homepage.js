

var stockSummary = function(symbol) {
    var apiUrl = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=tsla&region=US";
    var options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f660f9d47fmshf086d0e64e87eb8p1be187jsnb542a0848fae',
            'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
    };
    fetch(apiUrl, options).then(function(response){
        response.json().then(function(data){
            console.log(data);
        });
    })
};

stockSummary();