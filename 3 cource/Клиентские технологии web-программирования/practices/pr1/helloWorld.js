function toggle() {
	var elem = document.getElementById('first-block');
    elem.classList.toggle('active');
	elem.classList.toggle('click1');
}

function animation() {
    var pos = 0;
    var id = setInterval(moveFromRightToLeft, 10);

    function moveFromRightToLeft() {
        if (pos == 1100) {
            clearInterval(id);
        } else {
            pos++;
            document.getElementById("second-block").style.left = pos + 'px';
        }
    }
}

