/* 
    --------- Menu
*/
// insert menu icon to a div
var main_menu_icon = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>';
document.getElementById('main_menu_icon').innerHTML = main_menu_icon;

// menu click function
document.getElementById('main_menu_icon').addEventListener('click', function () {

    if (document.getElementById('main_menu_ul_id').style.display === 'block') {

        document.getElementById('main_menu_ul_id').style.display = 'none';

    } else {

        document.getElementById('main_menu_ul_id').style.display = 'block';

    }
});/* menu click function */


/* 
    ------ Main Menu Scrolling and Display Fixed
*/

// Get Document Height
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

// Get Parent of Scrolled window
function amountscrolled() {
    var winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    var docheight = getDocHeight();
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var trackLength = docheight - winheight;
    var pctScrolled = Math.floor(scrollTop / trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

    // Return value of Scrolled Parcent
    return pctScrolled;
}/* parcent of scrolled */

// Initial state for detection direction
var scrollPos = 0;
// If window Scroll This Function will Execute
window.addEventListener("scroll", function () {

    // direction detection if scroll up return true otherwise nothing
    function direction_detect() {
        // detects new state and compares it with the new one
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            return true;
        }
        // saves the new position for iteration.
        scrollPos = (document.body.getBoundingClientRect()).top;
    }/* direction detection */

    // Main Menu Function - fixed/absolute/animation
    if (7 > amountscrolled()) {

        let header = document.getElementById('header').style;
        header.position = 'absolute';
        header.animationName = 'unset';
        header.animationDuration = 'unset';

    } else if (direction_detect() === true && 10 > amountscrolled() && amountscrolled() > 7) {

        let header = document.getElementById('header').style;
        header.width = '100%';
        header.zIndex = '9';
        header.animationName = 'menu_animation_out';
        header.animationDuration = '3s';

        setTimeout(() => {

            let header = document.getElementById('header').style;
            header.position = 'absolute';

        }, 500);

    } else if(7 < amountscrolled()){

        let header = document.getElementById('header').style;
        header.position = 'fixed';
        header.width = '100%';
        header.zIndex = '9';
        header.animationName = 'menu_animation_in';
        header.animationDuration = '3s';

    }/* Main Menu Function - fixed/absolute/animation */
}, true);/* scroll */
