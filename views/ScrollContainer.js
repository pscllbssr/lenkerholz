import './ScrollContainer.css';
import './Scene.css';
import './Timeline.css';
import ScrollTrigger from 'react-scroll-trigger';
import ScrollProgress from 'scrollprogress';
import * as React from "react";


export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progress: 0, transparent: false}
    }

    onEnterViewport(state, ref) {
        let el = document.getElementById(ref.props['data-ref']);
        if (el)
            el.classList.toggle("visible");
    }

    onExitViewport(state, ref) {
        let el = document.getElementById(ref.props['data-ref']);
        if (el)
            el.classList.toggle("visible");
    }

    onProgress(state, ref) {
        this.setState({
            progress: state.progress,
        });
    }

    toggleTimeline() {
        this.setState({
            transparent: !this.state.transparent
        });
    }

    componentDidMount() {
        this.progressObserver = new ScrollProgress((x, y) => {
            this.setState({ totalProgress: y * 100 });
        });
    }

    componentWillUnmount() {
        this.progressObserver.destroy();
    }

    render() {


        let progressStyle = {
            width: `${this.state.totalProgress}%`
        };

        let progressMenu = this.props.scenes.map((scene) =>
            <div className='progress-menu__item' style={{'width': (scene.height*10) + 'vw'}}></div>
        );

        let fullScreenStyle = {};

        if (this.state.transparent)
            fullScreenStyle = {opacity: 0.5};

        let triggers = this.props.scenes.map((scene) =>
            <div className='trigger'>
                <ScrollTrigger onEnter={this.onEnterViewport.bind(this)} onExit={this.onExitViewport.bind(this)}
                               onProgress={this.onProgress.bind(this)}
                               triggerOnLoad={true} className="trigger0" data-ref={scene.id} throttleScroll={0}
                               style={{'height': (scene.height*100) + 'vh'}}
                >{scene.id}</ScrollTrigger>
            </div>
        );

        let scenarios = this.props.scenes.map((scene) =>
            scene.element(this.state.progress)
        );

        return (
            <div className="app">
                <div className="progress-bar" style={progressStyle}>
                </div>
                <div className={'progress-menu'}>
                    {progressMenu}
                </div>
                <div className='progress' style={{width: this.state.progress * 100 + 'vw'}}>&nbsp;</div>
                <button onClick={this.toggleTimeline.bind(this)} className='timeline-toggler' style={{display: 'none'}}>Toggle Timeline</button>
                <section className="full-screen" style={fullScreenStyle}>
                    <div className="animation">
                        {scenarios}
                    </div>
                </section>
                <section className="timeline">
                    {triggers}
                </section>
            </div>
        );
    }
}