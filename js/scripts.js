var myProjects = [{
    title: "Interactive resume using JSON and Google Maps API",
    pic: "img/project1.jpg"
}, {
    title: "Portfolio project with Bootstrap",
    pic: "img/project2.jpg"
}, {
    title: "Movie trailer website using Python and YouTube",
    pic: "img/project3.jpg"
}, {
    title: "Pinterest clone with Ruby on Rails, JavaScript, and Bootstrap",
    pic: "img/project4.jpg"
}, ];

function initMap() {
    var myLatLng = {
        lat: 39.1363401,
        lng: -84.5404014
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Cincinnati'
    });
}

$(document).ready(function() {
    $('#message-box').css("background-color", "pink");
    $('#submit-button').on("click", function() {
        $('#visible-comment').empty();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var comment = $('#message-box').val();
        if (name.length > 0 && email.length > 0 && comment.length > 0) {
            /*	  $('#visible-comment').append("<h4>Your Message Below</h4>");
            	  $('#visible-comment').append("<p>Name: " + name + "</p>");
            	  $('#visible-comment').append("<p>Phone: " + phone + "</p>");
            	  $('#visible-comment').append("<p>Email: " + email + "</p>");
            	  $('#visible-comment').append("<p>Message: " + comment + "</p>");*/
            $('#name').val('');
            $('#phone').val('');
            $('#email').val('');
            $('#message-box').val('');
            $('#char-count').text('0');
            return false;
            /*	} else {
            		$('#visible-comment').append("<h3>The form has not been filled out. Name, email address, and message are required.</h3>");*/
        }
    });

    var rows = $('.my-row');
    for (var i = 0; i < rows.length; ++i) {
        if (i % 2 === 0) {
            $(rows[i]).css("background-color", "silver");
        };
    };

    for (var x = 0; x < myProjects.length; ++x) {
        $("#" + x).css("background-image", "url(" + myProjects[x].pic + ")");
    };

    $('.image').mouseenter(function() {
        console.log(myProjects[this.id].title);
        $(this).html("<p class='info'><span class='proj-title'>Title:</span>" + myProjects[this.id].title + "</p>");
    }).mouseleave(function() {
        $(".image").html("");
        $(".info").css("background-color", "transparent");
    });


    $('#message-box').on("keyup", function() {
        var charCount = $('#message-box').val().length;
        $('#char-count').html(charCount);
        if (charCount > 50) {
            $('#char-count').css("color", "red");
        } else {
            $('#char-count').css("color", "black");
        }
    });

});