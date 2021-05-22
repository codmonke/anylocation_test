var hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');

hamburger.onclick = function(event) {
    hamburger.classList.toggle('opened')
    menu.classList.toggle('opened')
}

for (var toggle of document.querySelectorAll('.toggle-submenu')) {
    var s = '.menu .dropdown.' + toggle.dataset.dropdown;
    var dropdown = document.querySelector(s)

    toggle.addEventListener('click', function(e) {
        e.preventDefault();

        dropdown_position(toggle, dropdown)
        dropdown.classList.toggle('opened')
    })

    var back = dropdown.querySelector('a.back')
    back.addEventListener('click', function(e) {
        e.preventDefault();
        dropdown.classList.remove('opened')
    })
}

function dropdown_position(toggle, dropdown) {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width >= 1000) {
        var menu_pos = menu.getBoundingClientRect()
        var toggle_pos = toggle.getBoundingClientRect()

        var left = toggle_pos.x - menu_pos.x;
        dropdown.style.left = left + 'px';
    } else {
        dropdown.style.left = '50%'
    }
}

function dropdown_hide() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width >= 1000) {
        for (var dropdown of document.querySelectorAll('.menu .dropdown')) {
            dropdown.classList.remove('opened')
        }

        hamburger.classList.remove('opened')
        menu.classList.remove('opened')
    }
}

window.addEventListener('resize', function(event) {
    dropdown_hide()
}, true);

window.addEventListener('click', function(event) {
    for (var toggle of document.querySelectorAll('.toggle-submenu')) {
        var s = '.menu .dropdown.' + toggle.dataset.dropdown;
        var dropdown = document.querySelector(s)

        if (dropdown.classList.contains('opened') &&
            !dropdown.contains(event.target) &&
            !toggle.contains(event.target)) {
            dropdown.classList.remove('opened');
        }
    }

    for (var select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(event.target)) {
            select.classList.remove('open');
        }
    }
})

function toggle_select(_select) {
    _select.querySelector('.custom-select').classList.toggle('open')
}

function change_select_options(cb) {
    for (var option of document.querySelectorAll(".custom-option")) {
        option.addEventListener('click', function() {
            if (!this.classList.contains('selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
                this.classList.add('selected');
                this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;

                if (!cb) return;
                cb(this)
            }
        })
    }
}

change_select_options();