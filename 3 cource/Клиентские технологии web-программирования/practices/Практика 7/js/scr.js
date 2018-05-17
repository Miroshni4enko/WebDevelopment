function myValidate() {
    function myValidate() {
        var examp = /^(([0-9]){2}-){2}([0-9]){4}$/g;
        var a = $("[name='borndate']").val();
        if (a.search(examp) == 0) {

            $('#vlid').hide();
        } else {
            $('#vlid').show();
        }
    }

    $(document).ready(function () {
        $('#form').validate({
            rules: {
                number: {
                    required: true,
                    digits: true,
                    min: 100,
                    max: 1000
                },
                eMail: {
                    required: true,
                    email: true
                },
                pass: {
                    required: true,
                    minlength: 5
                },
                repass: {
                    required: true,
                    equalTo: "[name='pass']"
                },
                numberyet: {
                    required: true,
                    digits: true
                }
            },
            messages: {
                number: {
                    required: "Number >100 and <1000",
                    min: jQuery.validator.format("this number <100"),
                    max: jQuery.validator.format("this number >1000")
                },
                eMail: {
                    email: jQuery.validator.format("This is not e-mail")
                },
                pass: {
                    minlength: jQuery.validator.format("minlenght of password 5")
                },
                repass: {
                    equalTo: jQuery.validator.format("passwords not equal")
                },
                numberyet: {
                    digits: jQuery.validator.format("not number")
                }
            }
        });
        //$('#form').validate();
    });
}
