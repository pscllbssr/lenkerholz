import './ScrollContainer.css';
import ScrollTrigger from 'react-scroll-trigger';
import {Controller, Scene} from 'react-scrollmagic';
import {Tween, Timeline} from 'react-gsap';
import * as React from "react";

import Header from './Header';
import Scene10 from './scenes/Scene10';
import Scene11 from './scenes/Scene11';
import Scene20 from './scenes/Scene20';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progress: 0, transparent: false}
    }

    onEnterViewport(state, ref) {
        console.log('enter: ' + ref.props['data-ref']);
        let el = document.getElementById(ref.props['data-ref']);
        if (el)
            el.classList.toggle("visible");
    }

    onExitViewport(state, ref) {
        console.log('exit: ' + ref.props['data-ref']);
        let el = document.getElementById(ref.props['data-ref']);
        if (el)
            el.classList.toggle("visible");
    }

    onProgress(state, ref) {
        console.log(state.progress);
        this.setState({
            progress: state.progress,
        });
    }

    toggleTimeline(){
        this.setState({
            transparent: !this.state.transparent
        });
    }

    render() {

        let fullScreenStyle = {};
        if(this.state.transparent)
            fullScreenStyle = {opacity: 0.5};

        return (
            <div className="app">
                <button onClick={this.toggleTimeline.bind(this)} className='timeline-toggler'>Toggle Timeline</button>
                <section className="full-screen" style={fullScreenStyle}>
                    <div className="animation">
                        <Header id="scene0" progress={this.state.progress} />
                        <Scene10 id='scene10' progress={this.state.progress} />
                        <Scene11 id='scene11' progress={this.state.progress}/>
                        <Scene20 id='scene20' progress={this.state.progress}/>
                    </div>
                </section>
                <section className="timeline">
                    <div className='trigger' style={{height: '99vh'}}>
                        spacer
                    </div>
                    <div className='trigger'>
                        <ScrollTrigger onEnter={this.onEnterViewport.bind(this)} onExit={this.onExitViewport.bind(this)}
                                       onProgress={this.onProgress.bind(this)}
                                       triggerOnLoad={true} className="trigger0" data-ref='scene0'>1</ScrollTrigger>
                    </div>
                    <div className='trigger'>
                        <ScrollTrigger onEnter={this.onEnterViewport.bind(this)} onExit={this.onExitViewport.bind(this)}
                                       onProgress={this.onProgress.bind(this)}
                                       triggerOnLoad={false} className="trigger1" data-ref='scene10'>1</ScrollTrigger>
                    </div>
                    <div className='trigger'>
                        <ScrollTrigger onEnter={this.onEnterViewport.bind(this)} onExit={this.onExitViewport.bind(this)}
                                       onProgress={this.onProgress.bind(this)}
                                       triggerOnLoad={false} className="trigger2" data-ref='scene11'>2</ScrollTrigger>
                    </div>
                    <div className='trigger'>
                        <ScrollTrigger onEnter={this.onEnterViewport.bind(this)} onExit={this.onExitViewport.bind(this)}
                                       onProgress={this.onProgress.bind(this)}
                                       triggerOnLoad={false} className="trigger3" data-ref='scene20'>3</ScrollTrigger>
                    </div>

                </section>
            </div>
        );
    }
}