$(document).ready(function (){
    document.getElementById("contact")
    $("#contact").validate({
        debug: true,
        errorClass: "alert alert-danger",
        ErrorLabelContainer: "#output-area",
        errorElement: "div",
        //rules here define what is good
        //
        rules: {
            name: {
                required: true
            },

            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxlength: 2000
            },
        },
        messages: {
            name: {
                required: "Name is a required field"
            },

            email: {
                email: "Please provide a valid email",
                required: "Email is required"
            },
            message: {
                required: "A message is required",
                maxlength: "Message must be 2000 characters or less"
            },
        },
        submitHandler: (form) => {
            $("#contact").ajaxSubmit({
                type: "POST",
                url: $("#contact").attr('action'),
                success: (ajaxOutput) => {
                    $('#output-area').css("display","")
                    $('#output-area').html(ajaxOutput)

                    if($('.alert-success' >= 1)){
                       $("#contact")[0].reset()
                    }
                }
            })
        }
    })
})
//validation ^

// map box
mapboxgl.accessToken = 'pk.eyJ1IjoibmFjb3N0YXN0b3JpZSIsImEiOiJja3Zza3doODY0cHFuMnZtbGZhZGRtZGVzIn0.mPHC_J_FbbiAaYLoK8NEjA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [-106.3659,35.5148],
    zoom: 7
});

// Create a default Marker and add it to the map.

//santa fe point of reference
const marker1 = new mapboxgl.Marker({ "color": "#b40219" })
    .setLngLat([-105.9378, 35.6870])
    .addTo(map);

///trampus trail
const marker2 = new mapboxgl.Marker({ "color": "#b40" })
    .setLngLat([-105.6370, 35.9932])
    .addTo(map);

//baldy trail
const marker3 = new mapboxgl.Marker({ "color": "#2efaff" })
    .setLngLat([-105.8045018, 35.79531126])
    .addTo(map);

//Big Tesuque Campground
const marker4 = new mapboxgl.Marker({ "color": "#19B402" })
    .setLngLat([-105.8086099, 35.76917048])
    .addTo(map);

//Tesuque Creek Trail #152
const marker5 = new mapboxgl.Marker({ "color": "#7a49a5" })
    .setLngLat([-105.827457, 35.7758511])
    .addTo(map);

//la luz trail
const marker6 = new mapboxgl.Marker({ "color": "#ffffffff" })
    .setLngLat([-106.4521, 35.2049])
    .addTo(map);


// Create a default Marker, colored black, rotated 45 degrees.
// const marker7 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
//     .setLngLat([12.65147, 55.608166])
//     .addTo(map);