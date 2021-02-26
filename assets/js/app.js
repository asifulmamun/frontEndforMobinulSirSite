/* 
    -------------
    -------------   FontAwesome/Any SVG Icon Function
    -------------
*/
function svg_icon(icon_class, icon) {
    var icon_loop;
    for (icon_loop = 0; icon_loop < document.getElementsByClassName('fa-search').length; icon_loop++) {
        document.querySelectorAll(icon_class)[icon_loop].innerHTML = icon;
    }
}

/* 
    --------- Menu
*/
// Mobile Menu - Toggle
document.getElementById('main_menu_icon').innerHTML = '<nav id="toggle_menu"><div class="toggle_item_top"></div><div class="toggle_item_middle"></div><div class="toggle_item_bottom"></div></nav>';

// menu click function - Toggle
document.getElementById('main_menu_icon').addEventListener('click', function () {
    // toggle menu icon - open/close
    document.querySelector('.toggle_item_top').classList.toggle('toggle_item_top_hover');
    document.querySelector('.toggle_item_middle').classList.toggle('toggle_item_middle_hover');
    document.querySelector('.toggle_item_bottom').classList.toggle('toggle_item_bottom_hover');

    if (document.getElementById('main_menu_ul_id').style.display === 'block') {
        document.getElementById('main_menu_ul_id').style.display = 'none';
    } else {
        document.getElementById('main_menu_ul_id').style.display = 'block';
    }
});/* menu click function */


/* 
    ------ Menu List Icon
*/
// Home
svg_icon('.fa-home', '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>');

// Register
svg_icon('.fa-suitcase', '<svg id="icon_suitcase" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="suitcase" class="svg-inline--fa fa-suitcase fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z"></path></svg>');

// sign in
svg_icon('.fa-sign-in-alt', '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" class="svg-inline--fa fa-sign-in-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path></svg>');

// Search Icon
svg_icon('.fa-search', '<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>');


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

    } else if (7 < amountscrolled()) {

        let header = document.getElementById('header').style;
        header.position = 'fixed';
        header.width = '100%';
        header.zIndex = '9';
        header.animationName = 'menu_animation_in';
        header.animationDuration = '3s';

    }/* Main Menu Function - fixed/absolute/animation */
}, true);/* scroll */
