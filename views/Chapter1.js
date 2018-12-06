import './Chapter.css';
import './Chapter1.css';
import ScrollTrigger from 'react-scroll-trigger';
import {Controller, Scene} from 'react-scrollmagic';
import {Tween, Timeline} from 'react-gsap';


import ReactDOM from 'react-dom';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible: false, sticky: false, after: false, offset: 0};
        this.someRefName = React.createRef();
        this.width = 0;
        this.svg = null;
    }

    startScene() {
        console.log('start scene');
        this.setState({
            visible: true,
        });
    }

    stopScene() {
        console.log('stop scene');
    }

    startSticky() {
        /*
        console.log('start sticky');
        this.setState({
            sticky: true,
        });*/
    }

    stopSticky() {
        console.log('stop sticky');
        this.setState({
            stickyBottom: false,
        });
    }

    toggleSticky() {
        /*
        this.setState({
            sticky: !this.state.sticky,
        });*/
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.width = this.someRefName.current.getBoundingClientRect().width;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll(event) {

        if (this.someRefName.current !== null) {
            let rect = this.someRefName.current.getBoundingClientRect();

            if (rect.y < 0 && (rect.y + rect.height) > window.innerHeight) {
                console.log('sticky');

                this.setState({
                    sticky: true
                });

                //console.log(this.state.sticky);

                //console.log(rect.y*-1);
                //console.log(rect.height);
                let offset = (rect.y * -1) - rect.height;

            } else if ((rect.y + rect.height) < window.innerHeight) {

                // after
                this.setState({
                    sticky: false,
                    after: true
                })
            }
            else {
                // before

                this.setState({
                    sticky: false,
                    after: false
                });
            }
        }
    }

    render() {

        const {
            visible,
        } = this.state;

        let sceneClassName = 'scene';
        let sceneStyle = {};
        if (this.state.sticky) {
            sceneClassName += ' sticky';
            sceneStyle = {position: 'fixed', top: 0};
        } else if (this.state.after) {
            sceneClassName += ' after';
        }

        return (
            <section className="chapter chapter-1" ref={this.someRefName}>
                <div className="animation">

                    <Controller>
                        <Scene
                            triggerElement=".scene-end"
                            duration={1000}>
                            {(progress) => (
                                <Tween
                                    from={{
                                        top: '0px'
                                    }}
                                    to={{
                                        top: '-100vh'
                                    }}
                                    ease="Strong.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <div className={sceneClassName + ' tween'} style={sceneStyle}>
                                        <div>
                                            <object type="image/svg+xml" data="/static/chapter1/Chapter1.svg"
                                                    id="svgChapter1">Your browser does not support SVGs
                                            </object>
                                        </div>
                                    </div>
                                </Tween>
                            )}
                        </Scene>
                    </Controller>

                </div>
                <div className="text-container">
                    <ScrollTrigger onEnter={this.startScene.bind(this)} onExit={this.startSticky.bind(this)}
                                   triggerOnLoad={false} className="scene-start"/>
                    <div className="text">
                        <h2>Waldpflege</h2>
                        <div>
                            <h3>Der Wald nimmt eine Schutzfunktion ein</h3>
                            Beinahe 90% der Waldfläche der Gemeinde Lenk ist als Schutzwald beschrieben und benötigt
                            eine
                            nachhaltige, intensive Pflege.
                            Davon sind
                            1331ha Gerinneschutzwald (65% der Gesamtwaldfläche)
                            559ha Lawinenschutzwald (27%)
                            112ha Hangmurenschutzwald (5%)
                            50ha Steinschlagschutzwald (2.5%)
                            3ha Rutschschutzwald (0.15%)
                        </div>
                        <div><h3>Zweite Folie</h3>
                            Lebensraum für Tiere und Pflanzen
                            Der Wald übernimmt nebst Schutzfunktionen auch Nutz- und Wohlfartsfunktionen. Weiter ist der
                            Wald
                            auch Lebensraum für Pflanzen und Tiere und ein natürlicher Filter für Wasser und Luft. Diese
                            drei
                            Waldfunktionen sind im Waldgesetz erwähnt.
                        </div>
                        <div><h3>Dritte Folie</h3>
                            Eine aktive Bewirtschaftung wird benötigt
                            Damit der Wald die von ihm erwarteten Leistungen erbringen kann, ist eine aktive
                            Bewirtschaftung und
                            Pflege erforderlich. Die Entscheidung für Lenker Holz hilft mit, diese Leistungen zu
                            ermöglichen. In
                            der Lenk wächst mehr Holz nach, als Waldbesitzer nutzen.
                            <ScrollTrigger onEnter={this.stopSticky.bind(this)} onExit={this.stopScene.bind(this)}
                                                                                                   triggerOnLoad={false} className="scene-end"/>
                        </div>
                    </div>

                </div>

            </section>
        );
    }
}