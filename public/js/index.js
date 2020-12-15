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

