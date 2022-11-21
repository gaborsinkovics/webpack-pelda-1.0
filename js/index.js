/*
import getDateString from './date';
import '../styles/styles.css';

document
    .querySelector('.js-content')
    .innerHTML=`It's ${ getDateString() }`;
*/

import getDateString from './date';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';
import 'bootstrap'; 
import '../index.html';


$(document).ready( () => {
    // Print the current time
    $('.js-content').html(`It's ${ getDateString() }`);

    // Display the BootStrap modal window
    $('.js-modal').modal({
        show: true,
        keyboard: true
    });
});

