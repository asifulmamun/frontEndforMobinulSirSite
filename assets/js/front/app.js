/* 
    ----- Shortby Front Page
*/
var vertical_icon = '<svg id="vertical_icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-vertical" class="svg-inline--fa fa-grip-vertical fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path></svg>';
var horizontal_icon = '<svg id="horizontal_icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-horizontal" class="svg-inline--fa fa-grip-horizontal fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path></svg>';

// icon set to short by div
document.getElementById('shortBy').innerHTML = vertical_icon+horizontal_icon;

// default style short by
document.getElementById('vertical_icon').style.display = 'block';
document.getElementById('horizontal_icon').style.display = 'none';

// when vertical icon click
document.getElementById('vertical_icon').addEventListener('click', function(){
    if(document.getElementById('vertical_icon').style.display === 'block'){

        // hide and show icon
        document.getElementById('vertical_icon').style.display = 'none';
        document.getElementById('horizontal_icon').style.display = 'block';

        // remove class - bootstrap grid
        document.getElementById('services_1st_row').classList.remove("row-cols-md-5");
        document.getElementById('services_1st_row').classList.remove("row-cols-lg-5");
        document.getElementById('services_1st_row').classList.remove("row-cols-xl-5");
        document.getElementById('services_1st_row').classList.remove("row-cols-xxl-5");

        // add class - bootstrap grid
        document.getElementById('services_1st_row').classList.add("row-cols-md-2");
        document.getElementById('services_1st_row').classList.add("row-cols-lg-2");
        document.getElementById('services_1st_row').classList.add("row-cols-xl-2");
        document.getElementById('services_1st_row').classList.add("row-cols-xxl-2");

        // add class for horizontal style
        document.getElementById('services_content').classList.add("services_content_horizontal");

    }
});/* when vertical icon click */

// when horizontal icon click
document.getElementById('horizontal_icon').addEventListener('click', function(){
    if(document.getElementById('horizontal_icon').style.display === 'block'){

        // hide and show icon
        document.getElementById('horizontal_icon').style.display = 'none';
        document.getElementById('vertical_icon').style.display = 'block';

        // remove class - bootstrap grid
        document.getElementById('services_1st_row').classList.remove("row-cols-md-2");
        document.getElementById('services_1st_row').classList.remove("row-cols-lg-2");
        document.getElementById('services_1st_row').classList.remove("row-cols-xl-2");
        document.getElementById('services_1st_row').classList.remove("row-cols-xxl-2");

        // add class - bootstrap grid
        document.getElementById('services_1st_row').classList.add("row-cols-md-5");
        document.getElementById('services_1st_row').classList.add("row-cols-lg-5");
        document.getElementById('services_1st_row').classList.add("row-cols-xl-5");
        document.getElementById('services_1st_row').classList.add("row-cols-xxl-5");

         // remove class for horizontal style
         document.getElementById('services_content').classList.remove("services_content_horizontal");

    }
});/* when horizontal icon click */