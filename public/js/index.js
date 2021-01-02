//Get artist to put in drop down.
let artists;
let images;
//Which images should be displayed
let switchInfo;
let switchId;
let Id;

//Pulls all artists names for dropdowns
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

//Create a new artist from form
$('#newArtist').on("submit", function (event) {
    event.preventDefault();
    const queryURL = "http://localhost:3001/api/artists"
    const firstName = $('#artistFirstName').val()
    const lastName = $('#artistLastName').val()
    const painter = $('#painterClick').is(":checked") ? "true" : "false";
    const sculptor = $('#sculptorClick').is(":checked") ? "true" : "false";
    const other = $('#otherClick').is(":checked") ? "true" : "false";
    $.ajax({
        type: "POST",
        url: queryURL,
        data: {
            artist_firstName: firstName,
            artist_lastName: lastName,
            artist_painter: painter,
            artist_sculptor: sculptor,
            artist_other: other,
        },
        success: console.log("Name added"),
        dataType: "json"
    });
    $("#newArtist").trigger("reset");
});

//Creates a new painting from form
$('#newPainting').on("submit", function (event) {
    event.preventDefault();
    const queryURL = "http://localhost:3001/api/paintings"
    const data = new FormData(this);
    console.log(data)

    for (var pair of data.entries()) {
        console.log(pair[0] + ' ' + pair[1])
    }
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
    $("#newPainting").trigger("reset");
});

//Creates a new sculpture from form
$('#newSculpture').on("submit", function (event) {
    event.preventDefault();
    const queryURL = "http://localhost:3001/api/sculptures"
    const data = new FormData(this);
    console.log(data)

    for (var pair of data.entries()) {
        console.log(pair[0] + ' ' + pair[1])
    }

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
    $("#newSculpture").trigger("reset");
});

//Submit dropdown list selection and get switchInfo to switch which images to display
$('#getArtistImages').on("submit", function (event) {
    event.preventDefault();
    $('#imagesTestArea').empty()
    Id = $("#allartist_id").val();
    artistType(Id)
});

//Take the selected artists id and show what kind of artist for switch case
function artistType(id) {
    const queryURL = "http://localhost:3001/api/artists/" + id
    $.get(queryURL, function (res) {
        switchInfo = res.artist_painter + " " + res.artist_sculptor + " " + res.artist_other
        displayImages()
    });
}

//Use switchInfo to show proper images
function displayImages() {
    console.log(switchInfo)
    const paintingUrl = "http://localhost:3001/api/paintings/" + Id;
    const sculptureUrl = "http://localhost:3001/api/sculptures/" + Id
    switch (switchInfo) {
        case "true false false":
            console.log("This is a painter")
            console.log(paintingUrl)
            $.get(paintingUrl, function (res) {
                console.log(res[0])
                var imageArray = res.map(function (obj) {
                    console.log(obj)
                    return {
                        location: obj.painting_location,
                        name: obj.painting_name,
                        size: obj.painting_height + " x " + obj.painting_width,
                        price: obj.painting_price,
                        type: obj.art_type,
                        id: obj.id
                    };
                });
                images = imageArray;
                console.log(images)
                layoutImages()
            });
            break;
        case "false true false":
            console.log("This is a sculptor")
            console.log(sculptureUrl)
            $.get(sculptureUrl, function (res) {
                console.log(res[0])
                var imageArray = res.map(function (obj) {
                    console.log(obj)
                    return {
                        location: obj.sculpture_location,
                        name: obj.sculpture_name,
                        size: obj.sculpture_height + " x " + obj.sculpture_width + " x " + obj.sculpture_depth,
                        price: obj.sculpture_price,
                        type: obj.art_type,
                        id: obj.id
                    };
                });
                images = imageArray;
                console.log(images)
                layoutImages()
            });
            break;
        case "false false true":
            console.log("This is a other")
            break;
        case "true true false":
            console.log("This is a painter/sculptor")
            $.get(paintingUrl, function (res) {
                console.log(res[0])
                var imageArray = res.map(function (obj) {
                    console.log(obj)
                    return {
                        location: obj.painting_location,
                        name: obj.painting_name,
                        size: obj.painting_height + " x " + obj.painting_width,
                        price: obj.painting_price,
                        type: obj.art_type,
                        id: obj.id
                    };
                });
                images = imageArray;
                console.log(images)
                layoutImages()
            });
            $.get(sculptureUrl, function (res) {
                console.log(res[0])
                var imageArray = res.map(function (obj) {
                    console.log(obj)
                    return {
                        location: obj.sculpture_location,
                        name: obj.sculpture_name,
                        size: obj.sculpture_height + " x " + obj.sculpture_width + " x " + obj.sculpture_depth,
                        price: obj.sculpture_price,
                        type: obj.art_type,
                        id: obj.id
                    };
                });
                images = imageArray;
                console.log(images)
                layoutImages()
            });
            break;
    }
    //Reuse below code to create cards based on switch
    function layoutImages() {
        for (var i = 0; i < images.length; i++) {
            var imgCardsDiv = $('<div class="card" id="imgCard">')
            var img = $('<img class="card-img-top p-2" alt="Card image">').attr({ "src": images[i].location, "width": 20 })
            var cardBody = $(`<div class="card-body">
            <p class="card-title">Name: ${images[i].name}</p>
            <p class="card-title">Size: ${images[i].size}</p>
            <p class="card-title">Price: ${images[i].price}</p>
            <button type="button" class="btn btn-danger deletebtn" id="deleteBTN" data-arttype="${images[i].type}" data-deletevalue="${images[i].id}">DELETE</button>
            <button type="button" class="btn btn-success editbtn" id="editBTN" data-arttype="${images[i].type}" data-editvalue="${images[i].id}" data-toggle="modal" data-target="#editModal">EDIT</button>
            </div>`);
            img.appendTo(imgCardsDiv)
            cardBody.appendTo(imgCardsDiv)
            imgCardsDiv.appendTo('#imagesTestArea');
        }
    }
}

//Delete a painting
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
        //AWS s3 delete runs through the painting_routes
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

//Edit Button and Modal
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
            console.log(res.id)
            console.log(res.painting_name)
            console.log(res.painting_height)
            console.log(res.painting_width)
            console.log(res.painting_price)
            console.log(res.artist_id)
            console.log(res.painting_location)
            var modalHeader = `<div class="modal-header">
                <img class="modal-image" id="editImage" src="${res.painting_location}">
            </div>`;
            var modalBody = `<div class="modal-body" id="editForm">
            <form id="editPainting" name="editPainting">
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
            <button type="submit" class="btn btn-primary" id="editSubmit" data-paintingvalue="${res.id}">Submit</button>
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
$('#editModal').on("submit", function (event) {
    event.preventDefault();
    const submitVal = $('#editSubmit').data("paintingvalue")
    const editUrl = "http://localhost:3001/api/paintings/" + submitVal
    const data = {
        "painting_name": $('#editpaintingName').val(),
        "painting_height": $('#editpaintingHeight').val(),
        "painting_width": $('#editpaintingWidth').val(),
        "painting_price": $('#editpaintingPrice').val(),
        "artist_id": $('#editpaintingArtist').val()
    }
    console.log(data)

    $.ajax({
        type: "POST",
        url: editUrl,
        data: data,
        success: console.log("Painting Edited"),
        error: function (error) {
            console.log(error)
        }
    })
});
