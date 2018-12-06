import Header from './Header';
import Scene10 from './scenes/Scene10';
import Scene11 from './scenes/Scene11';
import Scene12 from './scenes/Scene12';
import Scene20 from './scenes/Scene20';
import Scene21 from './scenes/Scene21';
import Scene22 from './scenes/Scene22';
import Scene23 from './scenes/Scene23';
import Scene30 from './scenes/Scene30';
import Scene31 from './scenes/Scene31';
import Scene32 from './scenes/Scene32';
import Scene33 from './scenes/Scene33';
import Summary from './Summary';
import Contact from './Contact';
import * as React from "react";

export default [
    {
        style: {top: '99vh'},
        id: 'scene0',
        element: <Header id="scene0" key='scene0' />
    },
    {
        style: {top: '199vh'},
        id: 'scene10',
        element: <Scene10 id="scene10" key='scene10' />
    },
    {
        style: {top: '299vh'},
        id: 'scene11',
        element: <Scene11 id="scene11" />
    },
    {
        style: {top: '399vh'},
        id: 'scene12',
        element: <Scene12 id="scene12" />
    },
    {
        style: {top: '499vh'},
        id: 'scene20',
        element: <Scene20 id="scene20" />
    },
    {
        style: {top: '599vh'},
        id: 'scene21',
        element: <Scene21 id="scene21" />
    },   
    {
        style: {top: '699vh'},
        id: 'scene22',
        element: <Scene22 id="scene22" />
    },   
    {
        style: {top: '799vh'},
        id: 'scene23',
        element: <Scene23 id="scene23" />
    },   
    {
        style: {top: '899vh'},
        id: 'scene30',
        element: <Scene30 id="scene30" />
    }, 
    {
        style: {top: '999vh'},
        id: 'scene31scene31',
        element: <Scene31 id="scene31scene31" />
    }, 
    {
        style: {top: '1099vh'},
        id: 'scene32',
        element: <Scene32 id="scene32" />
    }, 
    {
        style: {top: '1199vh'},
        id: 'scene33',
        element: <Scene33 id="scene33" />
    }, 
    {
        style: {top: '1299vh'},
        id: 'scene98',
        element: <Summary id="scene98" />
    },
    {
        style: {top: '1399vh'},
        id: 'scene99',
        element: <Contact id="scene99" />
    }
]