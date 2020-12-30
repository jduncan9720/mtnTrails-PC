
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
    $('#imagesTestArea').empty()
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
                price: obj.painting_price,
                id: obj.id
            };
        });
        images = imageArray;
        console.log(images)
        for (var i = 0; i < images.length; i++) {
            var imgCardsDiv = $('<div class="card" id="imgCard">')
            var img = $('<img class="card-img-top p-2" alt="Card image">').attr({ "src": images[i].location, "width": 20 })
            var cardbody = $('<div class="card-body">');
            var title = $('<p class="card-title">').text("Name: " + images[i].name)
            var size = $('<p class="card-title">').text("Size: " + images[i].size)
            var price = $('<p class="card-title">').text("Price: " + images[i].price)
            var deleteButton = $('<button type="button" class="btn btn-danger deletebtn" id="deleteBTN">DELETE</button>')
            var editButton = $('<button type="button" class="btn btn-success editbtn" id="editBTN" data-toggle="modal" data-target="#editModal">EDIT</button>')
            deleteButton.attr("data-deletevalue", images[i].id)
            editButton.attr("data-editvalue", images[i].id)
            console.log(deleteButton)
            img.appendTo(imgCardsDiv)
            title.appendTo(cardbody)
            size.appendTo(cardbody)
            price.appendTo(cardbody)
            deleteButton.appendTo(cardbody)
            editButton.appendTo(cardbody)
            cardbody.appendTo(imgCardsDiv)
            imgCardsDiv.appendTo('#imagesTestArea');
            // img.attr('src', images[i].location);
        }

    });
});


$("#imagesTestArea").on("click", ".deletebtn", async function () {
    buttonVal = $(this).data("deletevalue")
    fileURL = "http://localhost:3001/api/paintings/id/" + buttonVal
    console.log(fileURL)
    var delFileName;
    //Get painting filename for delete
    $.ajax({
        type: "GET",
        url: fileURL,
        dataType: "json",
        success: function (res) {
            delFileName = res.painting_filename;
            console.log(delFileName)
        }
        //AWS s3 delete runs through the painitng_routes
    });

    //Delete painting from the database
    var queryURL = "http://localhost:3001/api/paintings/" + buttonVal
    $.ajax({
        url: queryURL,
        type: 'DELETE',
        success: console.log("Painting Deleted!"),
        error: function (error) {
            console.log(error)
        }
    });

});

//Edit Button
$("#imagesTestArea").on("click", ".editbtn", async function () {
    $("#modalContent").empty()

    const artistURL = "http://localhost:3001/api/artists"
    buttonVal = $(this).data("editvalue")
    queryURL = "http://localhost:3001/api/paintings/id/" + buttonVal
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            console.log(res.painting_name)
            console.log(res.painting_height)
            console.log(res.painting_width)
            console.log(res.painting_price)
            console.log(res.artist_id)
            console.log(res.painting_location)
            var modalHeader = `<div class="modal-header">
                <img class="modal-image" id="editImage" src="${res.painting_location}">
            </div>`;
            var modalBody = `<div class="modal-body">
            <form id="editPainting">
            <div class="form-group">
              <label for="editpaintingName">Painting Name:</label>
              <input name="painting_name" type="text" class="form-control" id="editpaintingName" value="${res.painting_name}">
            </div>
            <div class="form-group">
              <label for="editpaintingHeight">Painting Height:</label>
              <input name="painting_height" type="text" class="form-control" id="editpaintingHeight" value="${res.painting_height}">
            </div>
            <div class="form-group">
              <label for="editpaintingWidth">Painting Width:</label>
              <input name="painting_width" type="text" class="form-control" id="editpaintingWidth" value="${res.painting_width}">
            </div>
            <div class="form-group">
              <label for="editpaintingPrice">Painting Price:</label>
              <input name="painting_price" type="text" class="form-control" id="editpaintingPrice" value="${res.painting_price}">
            </div>
            <div class="form-group">
              <label for="editpaintingArtist">Artist Name:</label>
              <select name="artist_id" class="custom-select mr-sm-2" id="editpaintingArtist">
                <option selected>Choose...</option>
              </select>
            </div>
            <br>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>  
            </div>`
            var modalFooter = `<div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>`
            $(modalHeader).appendTo("#modalContent")
            $(modalBody).appendTo("#modalContent")
            $(modalFooter).appendTo("#modalContent")
        },
        error: function (error) {
            console.log(error)
        },
    })
    $.get(artistURL, function (res) {
        var artistArray = res.map(function (obj) {
            return { name: obj.artist_firstName + " " + obj.artist_lastName, value: obj.id };
        });
        artists = artistArray;
        console.log(artists)
        for (var i = 0; i < artists.length; i++) {
            $('<option/>').val(artists[i].value).html(artists[i].name).appendTo('#editpaintingArtist');
        }
    });
});

//Edit painting by ID
$('#editPainting').on("submit", function (event) {
    event.preventDefault();
    const editUrl = "http://localhost:3001/api/paintings/" + editId
    const editId = $("#editBTN").val()
    const data = new FormData(this);
    console.log(data)

    // alert(editUrl)
    // $.ajax({
    //     type: "PUT",
    //     url: editUrl,
    //     dataType: "json",
    //     data
    // })
});
