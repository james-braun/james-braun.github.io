

$(document).ready(function() {

    // select and remove H1 element.
    $(document.getElementById('gallery-heading')).hide();
    
    // create a input element.
    const searchElement = document.createElement("input");
    document.getElementById('search-bar').appendChild(searchElement);
   
    // set input elements attributes.
    searchElement.setAttribute('type', 'search');
    searchElement.setAttribute('id', 'search');
    searchElement.setAttribute('placeholder', 'Search');
    searchElement.setAttribute('value', '');
    searchElement.setAttribute('name', 'user_search');

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
    document.querySelector('input').addEventListener('keyup', function () {

        // cycle though all anchor elements
        $('a').each(function() {

            // if the for loop anchor element is not null.  compare the anchor elements data-title to the search elements value and show or hide pictures as necessary.
            if (($(this).attr('data-title')) && (includes($(this).attr('data-title').toUpperCase(), document.getElementById('search').value.toUpperCase()) === true)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

