import Header from './Header';
import Scene10 from './scenes/Scene10';
import Scene11 from './scenes/Scene11';
import Scene12 from './scenes/Scene12';
import Scene20 from './scenes/Scene20';
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
        id: 'scene98',
        element: <Summary id="scene98" />
    },
    {
        style: {top: '699vh'},
        id: 'scene99',
        element: <Contact id="scene99" />
    }
]