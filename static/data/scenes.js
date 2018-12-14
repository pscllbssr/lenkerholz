import Header from '../../views/Header';
import Scene10 from '../../views/scenes/Scene10';
import Scene11 from '../../views/scenes/Scene11';
import Scene12 from '../../views/scenes/Scene12';
import Scene20 from '../../views/scenes/Scene20';
import Scene21 from '../../views/scenes/Scene21';
import Scene22 from '../../views/scenes/Scene22';
import Scene23 from '../../views/scenes/Scene23';
import Scene30 from '../../views/scenes/Scene30';
import Scene31 from '../../views/scenes/Scene31';
import Summary from '../../views/Summary';
import Contact from '../../views/Contact';
import * as React from "react";

export default [
    {
        style: {top: '99vh'},
        height: 1,
        id: 'scene0',
        element: (progress) => {
            return <Header id="scene0" key='scene0' progress={progress} />
        }
    },
    {
        style: {top: '199vh'},
        height: 1.5,
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
        height: 1.5,
        element: (progress) => {
            return <Scene11 id="scene11" progress={progress} />
        }
    },
    {
        style: {top: '399vh'},
        id: 'scene12',
        height: 1.5,
        element: (progress) => {
            return <Scene12 id="scene12" progress={progress} />
        }
    },
    {
        style: {top: '499vh'},
        id: 'scene20',
        height: 1.5,
        element: (progress) => {
            return <Scene20 id="scene20" progress={progress}/>
        }
    },
    {
        style: {top: '599vh'},
        id: 'scene21',
        height: 1.5,
        element: (progress) => {
            return <Scene21 id="scene21" progress={progress}/>
        }
    },   
    {
        style: {top: '699vh'},
        id: 'scene22',
        height: 1.5,
        element: (progress) => {
            return <Scene22 id="scene22" progress={progress} />
        }
    },   
    {
        style: {top: '799vh'},
        id: 'scene23',
        height: 1.5,
        element: (progress) => {
            return <Scene23 id="scene23" progress={progress}/>
        }
    },   
    {
        style: {top: '899vh'},
        id: 'scene30',
        height: 1.5,
        element: (progress) => {
            return <Scene30 id="scene30" progress={progress} /> }
    }, 
    {
        style: {top: '999vh'},
        id: 'scene31',
        height: 3,
        element: (progress) => {
            return <Scene31 id="scene31" progress={progress} />
        }
    }, /*
    {
        style: {top: '1099vh'},
        id: 'scene32',
        height: 1.5,
        element: (progress) => {
            return <Scene32 id="scene32" progress={progress} />
        }
    }, 
    {
        style: {top: '1199vh'},
        id: 'scene33',
        height: 1.5,
        element: (progress) => { return <Scene33 id="scene33" progress={progress} /> }
    }, */
    {
        style: {top: '1299vh'},
        id: 'scene98',
        height: 1.5,
        element: (progress) => {
            return <Summary id="scene98" progress={progress} />
        }
    },
    {
        style: {top: '1399vh'},
        id: 'scene99',
        height: 1.5,
        element: (progress) => {
            return <Contact id="scene99" progress={progress}/>
        }
    }
]