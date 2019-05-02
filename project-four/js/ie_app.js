

$(document).ready(function() {

    // select and remove H1 element.
    $('#gallery-heading').hide();
    
    // create a input element.
    const $searchElement = $('<input type="search" id="search" placeholder="Search" value="" name="user_search" />');
    $('#search-bar').append($searchElement);

    // show lightbox arrows on all mobile devices.
    lightbox.option({
        'wrapAround': true
    });

    // function tests if search is in data-title.
    function includes(container, value) {
        var returnValue = false;
        var pos = container.indexOf(value);
        if (pos >= 0) {
            returnValue = true;
        }
        return returnValue;
    }

    // input event keyup()
    $('input').keyup(function () {

        // cycle though all anchor elements
        $('a').each(function() {

            // if the for loop anchor element is not null.  compare the anchor elements data-title to the search elements value and show or hide pictures as necessary.
            if (($(this).attr('data-title')) && (includes($(this).attr('data-title').toUpperCase(), $('#search').val().toUpperCase()) === true)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

