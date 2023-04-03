$(document).ready(function() {
    $('.column').on('click', function() {
        $(this).css('background-color', 'green');
    });

    $('#heroes').children('.hero-random').each(function() {
        // $(this).css('background-color', 'red');

        var random = Math.floor(Math.random() * heroes.length);

        $(this).html(heroes[random]);
    });

    $('.hero-random').on('click', function() {
        var heroRandom = $(this);
        var selectedHero = $(this).text();

        if (selectedHero != '') {
            $('#player1-slots').children('.waiting-column').each(function() {
                if ($(this).text() == '') {
                    $(this).html(selectedHero);
                    heroRandom.html('');
                    return false;
                }
            });
        }
    });

    $('.waiting-column').draggable();
});
