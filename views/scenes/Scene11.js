import './Scene11.css';
import {Tween, Timeline} from 'react-gsap';
import {Controller, Scene} from 'react-scrollmagic';


export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let birdClass = 'fader';
        let textClass= 'text';

        if (this.props.progress > 0.2 && this.props.progress < 0.8) {
            textClass += ' visible';
        } else if (this.props.progress > 0.8) {
            textClass += ' out';
        }

        if (this.props.progress > 0.3 && this.props.progress < 0.9) {
            birdClass += ' visible';
        } else if (this.props.progress > 0.9) {
            birdClass += ' out';
        }

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest03.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>

                <div id='bird'>
                    <object type="image/svg+xml" data="/static/chapter1/Bird.svg" width="85" height="42"
                            className={birdClass}
                            >Your browser does not support
                        SVGs
                    </object>
                </div>
                <div className={textClass}>
                    <h2>Waldpflege</h2>
                    <h3>Wohlfahrts- und Nutzfunktion</h3>
                    Neben seiner Schutzfunktion dient der Wald auch als Lebensraum für zahlreiche einheimische Tiere und
                    Pflanzen. Er bildet eine naturnahe Lebensgemeinschaft und bietet ein natürliches Erholungsgebiet.
                    Durch das filtern von Luft und Wasser übernimmt der Wald auch eine wichtige Nutzfunktion.
                </div>
            </div>
        );
    }
}