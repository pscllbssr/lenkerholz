import './Scene11.css';
import PinParallax from '../../components/PinnableParallax'
import PopIn from '../../components/CssAnimator'
import FallDown from '../../components/FallDown'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>

                <FallDown className='scene__background' progress={this.props.progress} start={0.25} end={0.4} inverted={true}>
                    <object type="image/svg+xml" data="/static/chapter1/Deer.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>

                <FallDown className='scene__background' progress={this.props.progress} start={0.15} end={0.3} inverted={true}>
                    <object type="image/svg+xml" data="/static/chapter1/Hedgehog.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>

                <PopIn progress={this.props.progress} in={0.25} out={0.85} id={'bird'} className={'popin'}>
                    <object type="image/svg+xml" data="/static/chapter1/Bird.svg" width="85" height="42">Your browser does not support
                        SVGs
                    </object>
                </PopIn>
                <h1 class="Kategorie">Waldpflege</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    
                    <h3>Wohlfahrts- und Nutzfunktion</h3>
                    Neben seiner Schutzfunktion dient der Wald auch als Lebensraum für zahlreiche einheimische Tiere und
                    Pflanzen. Er bildet eine naturnahe Lebensgemeinschaft und bietet ein natürliches Erholungsgebiet.
                    Durch das filtern von Luft und Wasser übernimmt der Wald auch eine wichtige Nutzfunktion.
                </PinParallax>
            </div>
        );
    }
}