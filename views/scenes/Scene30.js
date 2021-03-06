import {Tween, Timeline, TweenMax} from 'react-gsap';
import PinParallax from '../../components/PinnableParallax'
import Alternating from '../../components/Alternating'
import FallDown from '../../components/FallDown'
import './Scene30.css';


export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id={this.props.id} className='scene'>
                <FallDown className='scene__background' progress={this.props.progress} start={0} end={0.1}
                          inverted={false} fallOff={1}>
                    <object type="image/svg+xml" data="/static/chapter3/Life01_swisstruck.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>

                <Tween
                    from={{
                        transform: 'translateX(-500px)'
                    }}
                    to={{
                        transform: 'translateX(500px)'
                    }}
                    progress={this.props.progress}
                    paused
                    stagger={0.15}>
                    <div className={'scene__background foreignTruck'}>
                        <Alternating progress={this.props.progress}>
                            <object type="image/svg+xml" data="/static/chapter3/Life01_foreigntruck-v01.svg"
                                    className='scene__background'>
                                Your browser does not support SVGs
                            </object>
                            <object type="image/svg+xml" data="/static/chapter3/Life01_foreigntruck-v02.svg"
                                    className='scene__background '>
                                Your browser does not support SVGs
                            </object>
                        </Alternating>
                    </div>

                </Tween>
                <h1 className="Kategorie">Ökologie</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    
                    <p>{this.value}</p>
                    <h3>Weniger Treibhausgase</h3>
                    Der Transport von Holz erzeugt, je nach Transportweg, einen grossen Teil des ausgestossenen
                    Treibhausgases der Holzproduktion. Bei lokal geschlagenem Holz sind die Transportwege aufs Minimum
                    reduziert. <br></br><br></br>
                    Während der Lebenszeit eines Baumes bindet dieser CO2. Wird ein Baum für Energie- oder
                    Wärmegewinnung verbrannt, gibt er nur so viel des Treibhausgases wieder frei, wie er während seiner
                    Lebenszeit gespeichert hatte. Somit kann Holz als CO2-neutrale Alternative zu Kohle, Öl und Gas
                    verwendet werden. <br></br><br></br>
                    Die Herstellung von Holzprodukten verbraucht viel weniger Energie, als jene anderer Baustoffe wie
                    z.B. Beton. Durch diese Energieeffizienz sinkt der Ausstoss von Treibhausgasen erheblich.
                </PinParallax>
            </div>
        );
    }
}