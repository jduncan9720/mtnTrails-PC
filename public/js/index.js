const axios = require("axios")

$('#newArtist').on("submit", function (event) {
    event.preventDefault();
    axios.post("/api/artists", {
        artist_firstName: $('#artistFirstName').val(),
        artist_lastName: $('#artistLastName').val()
    }).then(response => {
        console.log(response.data)
    })
    .catch (function (error) {
        console.log(error)
    })
});