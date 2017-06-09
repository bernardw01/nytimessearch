//Team Tina Code
//

var articles = [];

$(document).ready(function () {


    function search(searchTerm, limit, startYear, endYear) {
        if (!startYear) {
            startYear = 2017;
        }
        ;
        if (!endYear) {
            endYear = 2017;
        }
        ;
        var begin = startYear + '0101';
        var end = endYear + '1231';
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
                'api-key': "f62d55179eec4db1a761790c6d6d7173",
                q: searchTerm,
                begin_date: begin,
                end_date: end
            });

        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            console.log(result);
            articles = result.response.docs;
            console.log(articles);
        }).fail(function (err) {
            throw err;
        });


    };

    search('UCF');
});