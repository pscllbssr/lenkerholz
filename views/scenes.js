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
import Bird from './scenes/Bird';
import * as React from "react";

export default [
    {
        style: {top: '99vh'},
        id: 'scene0',
        element: (progress) => {
            return <Header id="scene0" key='scene0' progress={progress} />
        }
    },
    {
        style: {top: '199vh'},
        id: 'scene10',
        element: (progress) => {
            return <Scene10 id="scene10" key='scene10' progress={progress} />
        }
    },/*
    {
        style: {top: '230vh'},
        id: 'bird',
        element: (progress) => {
            return <Bird id="bird" key='bird' progress={progress} />
        }
    },*/
    {
        style: {top: '299vh'},
        id: 'scene11',
        element: (progress) => {
            return <Scene11 id="scene11" progress={progress} />
        }
    },
    {
        style: {top: '399vh'},
        id: 'scene12',
        element: (progress) => {
            return <Scene12 id="scene12" progress={progress} />
        }
    },
    {
        style: {top: '499vh'},
        id: 'scene20',
        element: (progress) => {
            return <Scene20 id="scene20" progress={progress}/>
        }
    },
    {
        style: {top: '599vh'},
        id: 'scene21',
        element: (progress) => {
            return <Scene21 id="scene21" progress={progress}/>
        }
    },   
    {
        style: {top: '699vh'},
        id: 'scene22',
        element: (progress) => {
            return <Scene22 id="scene22" progress={progress} />
        }
    },   
    {
        style: {top: '799vh'},
        id: 'scene23',
        element: (progress) => {
            return <Scene23 id="scene23" progress={progress}/>
        }
    },   
    {
        style: {top: '899vh'},
        id: 'scene30',
        element: (progress) => {
            return <Scene30 id="scene30" progress={progress} /> }
    }, 
    {
        style: {top: '999vh'},
        id: 'scene31scene31',
        element: (progress) => {
            return <Scene31 id="scene31scene31" progress={progress} />
        }
    }, 
    {
        style: {top: '1099vh'},
        id: 'scene32',
        element: (progress) => {
            return <Scene32 id="scene32" progress={progress} />
        }
    }, 
    {
        style: {top: '1199vh'},
        id: 'scene33',
        element: (progress) => { return <Scene33 id="scene33" progress={progress} /> }
    }, 
    {
        style: {top: '1299vh'},
        id: 'scene98',
        element: (progress) => {
            return <Summary id="scene98" progress={progress} />
        }
    },
    {
        style: {top: '1399vh'},
        id: 'scene99',
        element: (progress) => {
            return <Contact id="scene99" progress={progress}/>
        }
    }
]