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
                required: "true"
            },
            email: {
                email: true,
                required: true
            },
            message: {
                required: true,
                maxLength: 2000
            }
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
                maxLength: "Message must be 2000 characters or less"
            }
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