

$(document).ready(function () {

    // select and remove H1 element.
    $(document.getElementById('gallery-heading')).hide();

    // create a input element.
    const searchElement = document.createElement("input");
    document.getElementById('search-bar').appendChild(searchElement);

    // Holds list of projects in my portfolio.
    const portfolio = document.getElementsByClassName("portfolio-pictures-and-text");
    const repository = document.getElementsByClassName("repo");

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

    var time;

    // flag to control if new page is to load or page is to scroll.
    var touchMoveFlag = false;

    // flag to control if mouseover waas triggered by touchstart.
    var touchStartFlag = false;

    // add event listeners
    for (var i = 0; i < portfolio.length; i += 1) {

        // if repository touchstart then goto repository page.
        repository[i].addEventListener('touchstart', function (e) {
            e.preventDefault();
            window.location.href = this.href;
        });

        // change colors on mouseover.
        portfolio[i].addEventListener('mouseover', function () {

            // if touchstart has not triggered mouseover listener then invert text colors.
            if (!touchStartFlag) {
                $(this.getElementsByTagName('img')[0]).css("box-shadow", "0.3125em 0.3125em 0.3125em black");
                $(this).css("text-shadow", "0.3125em 0.3125em 0.3125em black");
                this.getElementsByTagName('h2')[0].style.color = "white";
                this.getElementsByTagName('h3')[0].style.color = "antiquewhite";
                touchStartFlag = false;
            }
        });

        // change colors on mouseout.
        portfolio[i].addEventListener('mouseout', function () {
            $(this.getElementsByTagName('img')[0]).css("box-shadow", "none");
            $(this).css("text-shadow", "none");
            this.getElementsByTagName('h2')[0].style.color = "antiquewhite";
            this.getElementsByTagName('h3')[0].style.color = "white";
        });

        // change colors on touchstart and lift portfolio item off the page.
        portfolio[i].addEventListener('touchstart', function (e) {
            this.getElementsByTagName('h2')[0].style.color = "white";
            this.getElementsByTagName('h3')[0].style.color = "antiquewhite";
            this.style.zIndex = 1000;
            this.style.transform = "scale(1.3)";
            
            // Stop mouseover from changing text colors.
            touchStartFlag = true;
        });

        // if user scolls then cancel webpage call.
        portfolio[i].addEventListener('touchmove', function () {
            touchMoveFlag = true;
            time = null;
        });

        // change color on touchend and if user has not scrolled then goto project page.
        portfolio[i].addEventListener('touchend', function (e) {
            this.getElementsByTagName('h2')[0].style.color = "antiquewhite";
            this.getElementsByTagName('h3')[0].style.color = "white";

            // if user has not scrolled then prevent default behavior of touchend.
            e.preventDefault();

            // put item back on page.
            this.style.transform = "scale(1)";
            this.style.zIndex = 100;

            // after 375 mili-second if user has not scrolled then goto project page.
            if (!touchMoveFlag) {
                var url = this.getElementsByTagName('a')[0].href;
                time = window.setTimeout(function () { window.location.href = url; }, 1000);
            }

            if (touchMoveFlag) {
                touchMoveFlag = false;
            }
        });
    } 
});