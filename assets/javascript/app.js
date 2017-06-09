//Team Tina Code
//


$(document).ready(function () {

    function search(searchTerm)
// Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
            'api-key': "f62d55179eec4db1a761790c6d6d7173"
        });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });
});