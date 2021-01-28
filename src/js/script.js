'use strict';

import menu from './modules/menu';
import modal from './modules/menu';
import smoothScrolling from './modules/smoothScrolling';
import changeColorOfTheSidepanel from './modules/changeColorOfTheSidepanel';
import form from './modules/form';
import skillsAutoPercents from './modules/skillsAutoPercents';
import delayMainAnimation from './modules/delayMainAnimation';

menu();
modal();
smoothScrolling();
changeColorOfTheSidepanel();
form();
skillsAutoPercents();
delayMainAnimation();

// ----------TipingText----------
const typed = new Typed('.typed', {
    strings: ['^1000 My name is Oleksandr ^300 <br> <span class="subtitle main__subtitle">I am Junior Front-End Developer</span>'],
    typeSpeed: 15,
    showCursor: false,
});

// ----------WOW-JS----------
new WOW().init();