
(function () {
    let roomsWrap = document.querySelector('.rooms__wrap');
    let roomImg = document.querySelectorAll('.rooms__img');
    let allRooms = document.querySelectorAll('.rooms__type');
    let roomType;

    roomsWrap.addEventListener('mouseover', function (e) {
        reset();
        if (e.target.classList.contains('rooms__type')) {
            roomType = e.target.dataset.room;
            roomImg[roomType].classList.add('active');
            e.target.classList.add('active');
        }
        for (var i = 0; i < allRooms.length; i++) {
            allRooms[i].classList.add('hide');
            e.target.classList.remove('hide');
        }

    });

    roomsWrap.addEventListener('mouseleave', function () {
        reset();
    });


    function reset() {
        for (var i = 0; i < allRooms.length; i++) {
            allRooms[i].classList.remove('active', 'hide');
        }
        for (var a = 0; a < roomImg.length; a++) {
            roomImg[a].classList.remove('active');
        }
    }
})();