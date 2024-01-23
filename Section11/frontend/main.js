import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './assets/css/style.css';


import Form from './modules/Form';
import FormLogin from './modules/FormLogin';
import FormContact from './modules/FormContact';
import FormAccount from './modules/FormAccount';

const register = new Form('register');
const login = new FormLogin('login');
const contact = new FormContact('contact');
const account = new FormAccount('account');

register.init();
login.init();
contact.init();
account.init();
