function changeInscription() {
    $(Document).ready(function () {
        checkBoxName = 'name';
        bold = 'bold';
        italic = 'italic';
        noInscription = 'no-inscription';
        checked = 'checked';
        $('form :checkbox').change(function findCheckBoxByName () {
                if (this.checked) {
                    if ($(this).attr(checkBoxName) == bold) {
                        $("#paragraph").css({'font-weight': bold});
                    }
                    if ($(this).attr(checkBoxName) == italic) {
                        $("#paragraph").css({'font-style': italic});
                    }
                    if ($(this).attr(checkBoxName) == noInscription) {
                        $("#paragraph")
                            .css({
                                'font-weight': 'normal',
                                'font-style': 'normal'
                            });
                        $("input[name='bold']")
                            .prop( checked , false)
                            .prop('disabled', true);
                        $("input[name='italic']")
                            .prop(checked , false)
                            .prop('disabled', true);
                    }
                } else {
                    if ($(this).attr(checkBoxName) == noInscription) {
                        $("input[name='bold']").prop('disabled', false);
                        $("input[name='italic']").prop('disabled', false);
                    }
                }
            }
        );
    })
}
function changeInscriptionByParagraphClick() {
    $("#paragraph").click(function () {
        $(this).css({'font-weight': 'bold'});
    });
}

