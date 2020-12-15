//Get artist to put in drop down.
let artists;

$(document).ready(function () {
    const queryURL = "http://localhost:3001/api/artists"
    $.get(queryURL, function (res) {
        var artistArray = res.map(function (obj) {
            return { name: obj.artist_firstName + " " + obj.artist_lastName, value: obj.id };
        });
        artists = artistArray;
        console.log(artists)
        for (var i = 0; i < artists.length; i++) {
            $('<option/>').val(artists[i].value).html(artists[i].name).appendTo('#paintingArtist');
        }
    });
});

//Create a new artist from form.
$('#newArtist').on("submit", function (event) {
    event.preventDefault();
    const queryURL = "http://localhost:3001/api/artists"
    const firstName = $('#artistFirstName').val()
    const lastName = $('#artistLastName').val()
    $.ajax({
        type: "POST",
        url: queryURL,
        data: {
            artist_firstName: firstName,
            artist_lastName: lastName
        },
        success: console.log("Name added"),
        dataType: "json"
    });

});

$('#newPainting').on("submit", function (event) {
    event.preventDefault();
    const queryURL = "http://localhost:3001/api/paintings"
    const paintingName = $('#paintingName').val()
    const paintingHeight = $('#paintingHeight').val()
    const paintingWidth = $('#paintingWidth').val()
    const paintingPrice = $('#paintingPrice').val()
    const paintingArtist = $('#paintingArtist').val()
    const paintingFilename = $('#paintingFile').val()

    console.log(paintingName, paintingHeight, paintingWidth, paintingPrice, paintingArtist, paintingFilename)

    $.ajax({
        type: "POST",
        url: queryURL,
        data: {
            painting_name: paintingName,
            painting_height: paintingHeight,
            painting_width: paintingWidth,
            painting_price: paintingPrice,
            painting_filename: paintingFilename,
            artist_id: paintingArtist
        },
        success: console.log("Painting added"),
        dataType: "json"
    });

});

