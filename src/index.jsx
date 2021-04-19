// JavaScript source code

// jsx - ¬ï¬ä¬à ¬Õ¬Ý¬ñ react
import * as $ from 'jquery';
import Post from '@models/Post';
//import json from './assets/json';
//import xml from './assets/data.xml';
//import csv from './assets/data.csv'
import FireSmile from '@/assets/fire';
import React from 'react';
import { render } from 'react-dom';
import './babel';
import './styles/styles.css';
import './styles/less.less';
import './styles/scss.scss';

const post = new Post('Webpack Title', FireSmile);
$('pre').html(post.toString());

const App = () => (
    <div className="container">
        <h1>Webpack Course</h1>
        <hr/>
        <hr/>
        <div className="logo"></div>
        <hr/>
        <pre></pre>
        <hr/>
        <div className="box">
            <h2>Less</h2>
        </div>
        <div className="card">
            <h2>Scss</h2>
        </div>
    </div>
    );
render(<App />, document.getElementById('app'));

//console.log('JSON: ', json);
//console.log('XML: ', xml);
//console.log('CSV: ', csv);vvhhhvhj