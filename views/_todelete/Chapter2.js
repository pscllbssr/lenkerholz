import './Chapter.css'
import './Chapter2.css'
import ScrollTrigger from 'react-scroll-trigger';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';



export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {visible: false, sticky:false, after: false, offset: 0};
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

    toggleSticky(){
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

    handleScroll(event){

        if(this.someRefName.current !== null){
            let rect = this.someRefName.current.getBoundingClientRect();

            if(rect.y < 0 && (rect.y + rect.height) > window.innerHeight){
                console.log('sticky');

                this.setState({
                    sticky: true
                });

                //console.log(this.state.sticky);

                //console.log(rect.y*-1);
                //console.log(rect.height);
                let offset = (rect.y*-1)-rect.height;

            }else if((rect.y + rect.height) < window.innerHeight){
                // after

                let offset = 0;

                this.setState({
                    sticky:false,
                    after: true,
                    offset: offset
                })
            }
            else{
                // before

                this.setState({
                    sticky: false,
                    after: false
                });
            }
        }
    }

    animateBird(){
        /*
        this.svg.select(".cls-71")
            .animate({ transform: 'r360,150,150s1.3' }, 1000, mina.bounce );*/
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
        }else if(this.state.after){
            sceneClassName += ' after';
            sceneStyle = {position: 'fixed', top: this.state.offset}
        }

        //let sceneStyle = {top: this.state.offset};

        return (
            <section className="chapter chapter-2" ref={this.someRefName}>
                <div className="animation">
                    <Controller>
                        <Scene
                            triggerElement=".chapter-2-scene-end"
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
                    <div className={sceneClassName + '  tween'} style={sceneStyle}>
                        <div>
                            <object type="image/svg+xml" data="/static/chapter2/Chapter2.svg" id="svgChapter2">Your browser does not support SVGs</object>
                        </div>
                    </div>
                                </Tween>
                            )}
                        </Scene>
                    </Controller>
                </div>

            <div className="text">

                <h2>Investition in die lokale Wirtschaft</h2>

                Das Holz in der Lenk wir unter anderem mittels Seilkran oder Hubschrauber die vielen Schluchten hinunter transportiert. Das ist nur einer der Gründe, warum die einheimische Waldwirtschaft vor grossen Herausforderungen steht. Die Wettbewerbsfähigkeit ist durch den grossen Mehraufwand schwierig zu gewährleisten.
 
                In vielen verschiedenen Gebieten der lokalen Holzwirtschaft werden durch die Nutzung von Lenker Holz Arbeitsplätze gesichert.
 
                -        Pflege des Waldes
                -        Forstwirtschaft
                -        Holztransport
                -        Holzverarbeitung
                -        Holzbau

            </div>
                <ScrollTrigger onEnter={this.stopSticky.bind(this)} onExit={this.stopScene.bind(this)}
                               triggerOnLoad={false} className="chapter-2-scene-end"/>
                    
            </section>           
        );
    }
}