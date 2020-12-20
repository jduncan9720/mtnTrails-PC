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
            $('<option/>').val(artists[i].value).html(artists[i].name).appendTo('#artist_id');
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
    const data = new FormData(this);
    console.log(data)

    for (var pair of data.entries()) {
        console.log(pair[0] + ' ' + pair[1])
    }
    // const paintingName = $('#paintingName').val()
    // const paintingHeight = $('#paintingHeight').val()
    // const paintingWidth = $('#paintingWidth').val()
    // const paintingPrice = $('#paintingPrice').val()
    // const paintingArtist = $('#paintingArtist').val()
    // const paintingFilename = $('#paintingFile').val().match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
    console.log($('#paintingFile'))
    const file = ($('#paintingFile')[0].files[0])
    
    $.ajax({
        type: "POST",
        dataType: "json",
        processData: false,
        contentType: false,
        url: queryURL,
        enctype: "multipart/form-data",
        data: data,
        success: console.log("Painting added"),
        error: function(error){
            console.log(error)
        }
    });

    // $.ajax({
    //     type: "POST",
    //     dataType: "json",
    //     url: queryURL,
    //     data: 
    //     {
    //         painting_name: paintingName,
    //         painting_height: paintingHeight,
    //         painting_width: paintingWidth,
    //         painting_price: paintingPrice,
    //         painting_artist: paintingArtist,
    //         painting_filename: file
    //     },
    //     success: console.log("Painting added"),
    //     error: function(error){
    //         console.log(error)
    //     }
    // });
});

