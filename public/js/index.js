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
            $('<option/>').val(artists[i].value).html(artists[i].name).appendTo('#Sartist_id');
            $('<option/>').val(artists[i].value).html(artists[i].name).appendTo('#allartist_id');
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
        error: function (error) {
            console.log(error)
        }
    });
});

$('#newSculpture').on("submit", function (event) {
    event.preventDefault();
    const queryURL = "http://localhost:3001/api/sculptures"
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
    console.log($('#sculptureFile'))
    const file = ($('#sculptureFile')[0].files[0])

    $.ajax({
        type: "POST",
        dataType: "json",
        processData: false,
        contentType: false,
        url: queryURL,
        enctype: "multipart/form-data",
        data: data,
        success: console.log("Sculpture added"),
        error: function (error) {
            console.log(error)
        }
    })
});

$('#getArtistImages').on("submit", function (event) {
    event.preventDefault();
    const URL = "http://localhost:3001/api/paintings/"
    const id = $("#allartist_id").val()
    const queryURL = URL + id
    console.log(queryURL)
    $.get(queryURL, function (res) {
        console.log(res[0])
        var imageArray = res.map(function (obj) {
            console.log(obj)
            return { 
                location: obj.painting_location,
                name: obj.painting_name,
                size: obj.painting_height + " x " + obj.painting_width,
                price: obj.painting_price
            };
        });
        images = imageArray;
        console.log(images)
        for (var i = 0; i < images.length; i++) {
            var imgCardsDiv = $('<div class="card" id="imgCard">')
            var img = $('<img class="card-img-top p-2" alt="Card image">').attr({"src":images[i].location, "width":20})
            var cardbody = $('<div class="card-body">');
            var title = $('<p class="card-title">').text("Name: " + images[i].name)
            var size = $('<p class="card-title">').text("Size: " + images[i].size)
            var price = $('<p class="card-title">').text("Price: " + images[i].price)
            var deleteButton = $('<a href="#" class="btn btn-danger deletebtn">DELETE</a>')
            img.appendTo(imgCardsDiv)
            title.appendTo(cardbody)
            size.appendTo(cardbody)
            price.appendTo(cardbody)
            deleteButton.appendTo(cardbody)
            cardbody.appendTo(imgCardsDiv)
            imgCardsDiv.appendTo('#imagesTestArea');
            // img.attr('src', images[i].location);
        }
    });
    });
    
