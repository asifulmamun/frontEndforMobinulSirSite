/* 
    --- Rating System
    <div class="rating">
        <span class="rating_star" id="rate_1"></span>
        <span class="rating_star" id="rate_2"></span>
        <span class="rating_star" id="rate_3"></span>
        <span class="rating_star" id="rate_4"></span>
        <span class="rating_star" id="rate_5"></span>
    </div>

    sass:
    ------
    .rating{
        cursor: pointer;
        .rating_star{
            .filled{
                color: rgb(247, 132, 1);
            }
            svg{
                width: 2rem;
            }
        }
        .remove_rating{
            color: rgb(218, 44, 44);
            svg{
                width: 1.5rem;
            }
        }
    }
*/

// rating empty
var rating_star_empty = '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>';
var rating_star_filled = '<svg class="filled" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';

// default empty rating
document.getElementById('rate_1').innerHTML = rating_star_empty;
document.getElementById('rate_2').innerHTML = rating_star_empty;
document.getElementById('rate_3').innerHTML = rating_star_empty;
document.getElementById('rate_4').innerHTML = rating_star_empty;
document.getElementById('rate_5').innerHTML = rating_star_empty;

// remove all
function all_rating_remove() {
    document.getElementById('rate_1').innerHTML = rating_star_empty;
    document.getElementById('rate_2').innerHTML = rating_star_empty;
    document.getElementById('rate_3').innerHTML = rating_star_empty;
    document.getElementById('rate_4').innerHTML = rating_star_empty;
    document.getElementById('rate_5').innerHTML = rating_star_empty;
}

// rated-1
function rated_1() {

    if (rating_value === 0 || rating_value === 2 || rating_value === 3 || rating_value === 4 || rating_value === 5) {

        rating_value = 1;
        console.log('Rated', rating_value);

        // add
        document.getElementById('rate_1').innerHTML = rating_star_filled;

        // remove
        document.getElementById('rate_2').innerHTML = rating_star_empty;
        document.getElementById('rate_3').innerHTML = rating_star_empty;
        document.getElementById('rate_4').innerHTML = rating_star_empty;
        document.getElementById('rate_5').innerHTML = rating_star_empty;

    } else if (rating_value == 1) {

        all_rating_remove();

        rating_value = 0;
        console.log('Rated', rating_value);
    }
};

// rated-2
function rated_2() {

    if (rating_value === 0 || rating_value === 1 || rating_value === 3 || rating_value === 4 || rating_value === 5) {

        rating_value = 2;
        console.log('Rated', rating_value);

        // add
        document.getElementById('rate_1').innerHTML = rating_star_filled;
        document.getElementById('rate_2').innerHTML = rating_star_filled;

        // remove
        document.getElementById('rate_3').innerHTML = rating_star_empty;
        document.getElementById('rate_4').innerHTML = rating_star_empty;
        document.getElementById('rate_5').innerHTML = rating_star_empty;

    } else if (rating_value == 2) {

        all_rating_remove();

        rating_value = 0;
        console.log('Rated', rating_value);
    }
};

// rated-3
function rated_3() {

    if (rating_value === 0 || rating_value === 1 || rating_value === 2 || rating_value === 4 || rating_value === 5) {

        rating_value = 3;
        console.log('Rated', rating_value);

        // add
        document.getElementById('rate_1').innerHTML = rating_star_filled;
        document.getElementById('rate_2').innerHTML = rating_star_filled;
        document.getElementById('rate_3').innerHTML = rating_star_filled;

        // remove
        document.getElementById('rate_4').innerHTML = rating_star_empty;
        document.getElementById('rate_5').innerHTML = rating_star_empty;

    } else if (rating_value == 3) {

        all_rating_remove();

        rating_value = 0;
        console.log('Rated', rating_value);
    }
};

// rated-4
function rated_4() {

    if (rating_value === 0 || rating_value === 1 || rating_value === 2 || rating_value === 3 || rating_value === 5) {

        rating_value = 4;
        console.log('Rated', rating_value);

        // add
        document.getElementById('rate_1').innerHTML = rating_star_filled;
        document.getElementById('rate_2').innerHTML = rating_star_filled;
        document.getElementById('rate_3').innerHTML = rating_star_filled;
        document.getElementById('rate_4').innerHTML = rating_star_filled;

        // remove
        document.getElementById('rate_5').innerHTML = rating_star_empty;

    } else if (rating_value == 4) {

        all_rating_remove();

        rating_value = 0;
        console.log('Rated', rating_value);
    }
};

// rated-5
function rated_5() {

    if (rating_value === 0 || rating_value === 1 || rating_value === 2 || rating_value === 3 || rating_value === 4) {

        rating_value = 5;
        console.log('Rated', rating_value);

        // add
        document.getElementById('rate_1').innerHTML = rating_star_filled;
        document.getElementById('rate_2').innerHTML = rating_star_filled;
        document.getElementById('rate_3').innerHTML = rating_star_filled;
        document.getElementById('rate_4').innerHTML = rating_star_filled;
        document.getElementById('rate_5').innerHTML = rating_star_filled;

    } else if (rating_value == 5) {

        all_rating_remove();

        rating_value = 0;
        console.log('Rated', rating_value);
    }
};

let rating_value = 0;
document.getElementById('rate_1').addEventListener('click', rated_1);
document.getElementById('rate_2').addEventListener('click', rated_2);
document.getElementById('rate_3').addEventListener('click', rated_3);
document.getElementById('rate_4').addEventListener('click', rated_4);
document.getElementById('rate_5').addEventListener('click', rated_5);















