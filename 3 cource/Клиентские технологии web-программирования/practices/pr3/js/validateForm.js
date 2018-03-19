inputTextNumber = "[type = 'text'] , [type='number']";
function validateForm() {
    $(Document).ready(
        function () {
            $(inputTextNumber).focusin((function () {
                $(this).css({
                    'border-color': 'green'
                });
            }));
            $(inputTextNumber).focusout((function () {
                if (validation(this)) {
                    $(this).css({'border-color': 'initial'});
                    removeError($(this));
                    if (validationAllInputText()) {
                        disabledObject($(":submit"), false);
                    }
                } else {
                    showValidError($(this));
                }
            }));

        })
}

function validation(obj) {
    if ($(obj).attr('name') == 'usrname') {
        if ($(obj).val().length > 5 || $(obj).val().length < 1) {
            return false;
        } else {
            return true;
        }
    }
    if ($(obj).attr('name') == 'limit') {
        if ($(obj).val() >= 0) {
            return false;
        } else {
            return true;
        }
    }
}

function validationAllInputText() {
    var isValid = true;
    $(inputTextNumber).each(function () {
        if (!validation($(this))) {
            isValid &= false;
        }
    });
    return isValid;
}

function showValidError(obj) {
    $(obj).css({
        'border-color': 'red'
    })
    if ($(obj).attr('name') == 'usrname') {
        obj.after(
            "<span id='user-err' style='color:red' id='usrname-err'> <=5 </span>"
        );
    }
    if ($(obj).attr('name') == 'limit') {
        obj.after(
            "<span id='limit-err' style='color:red' id='usrname-err'> only negative number </span>"
        );
        disabledObject($(":submit"), true)
    }

}

function removeError(obj) {
    if ($(obj).attr('name') == 'usrname') {
        $('#user-err').detach();
    }
    if ($(obj).attr('name') == 'limit') {
        $('#limit-err').detach();
    }
}

function disabledObject(obj, disable) {
    $(":submit").prop('disabled', disable);
}

