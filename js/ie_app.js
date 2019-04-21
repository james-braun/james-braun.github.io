

$(document).ready(function () {

    // select and remove H1 element.
    $(document.getElementById('gallery-heading')).hide();

    // create a input element.
    const searchElement = document.createElement("input");
    const portfolio = document.getElementsByClassName("portfolio-pictures-and-text");
    document.getElementById('search-bar').appendChild(searchElement);

    // set input elements attributes.
    searchElement.setAttribute('type', 'search');
    searchElement.setAttribute('id', 'search');
    searchElement.setAttribute('placeholder', 'Search');
    searchElement.setAttribute('value', '');
    searchElement.setAttribute('name', 'user_search');


    // function curtesy of Prakash Poudel
    // https://www.sharmaprakash.com.np/javascript/ie-alternative-to-inludes/#
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
        $.each(portfolio, function () {

            // if the for loop each element that is not null.  compare the elements text to the search elements value and show or hide elements as necessary.
            if (($(this)) && (includes($(this).text().toUpperCase(), document.getElementById('search').value.toUpperCase()) === true)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    var eventFlag = false;

    for (i = 0; i < portfolio.length; i += 1) {
        portfolio[i].addEventListener('mouseover', function () {
            this.getElementsByTagName('h2')[0].style.color = "cadetblue";
            this.getElementsByTagName('h3')[0].style.color = "darkslateblue";
        });

        portfolio[i].addEventListener('mouseout', function () {
            this.getElementsByTagName('h2')[0].style.color = "darkslateblue";
            this.getElementsByTagName('h3')[0].style.color = "cadetblue";
        });
 
        portfolio[i].addEventListener('touchstart', function () {
            this.style.transform = "scale(1.1)";
        });

        portfolio[i].addEventListener('touchmove', function () {
            eventFlag = true;
        });

        portfolio[i].addEventListener('touchend', function (e) {
            if (!eventFlag) {
                e.preventDefault();
            }
            this.style.transform = "scale(1)";
            var portfolioElementUrl = this.getElementsByTagName('a')[0].href
            if (!eventFlag) {
                setTimeout(function () { myFunc(portfolioElementUrl) }, 500);
                eventFlag = false;
            }


        });
    }

    function myFunc(portfolioElementUrl) {
        window.location.href = portfolioElementUrl;
    }
});