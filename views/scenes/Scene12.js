import PinParallax from '../../components/PinnableParallax'
import FallDown from '../../components/FallDown'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let textClass = 'text';

        if (this.props.progress > 0.2 && this.props.progress < 0.8) {
            textClass += ' visible';
        } else if (this.props.progress > 0.8) {
            textClass += ' out';
        }

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest.svg"
                        className='scene__background'>Your browser does not support
                    SVGs
                </object>

                <FallDown className='scene__background' progress={this.props.progress} start={0.15} end={0.3}
                          inverted={true}>
                    <object type="image/svg+xml" data="/static/chapter1/Foerster.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>

                <FallDown className='scene__background' progress={this.props.progress} start={0.2} end={0.35}
                          inverted={true}>
                    <object type="image/svg+xml" data="/static/chapter1/Woodstack.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
                <h1 className="Kategorie">Waldpflege</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    
                    <h3>Eine aktive Bewirtschaftung wird benötigt</h3>
                    Damit der Wald diese Funktionen erbringen kann, ist eine aktive Bewirtschaftung und Pflege
                    erforderlich. Diese stellt sicher, dass der Wald in seiner Fläche und in seiner räumlichen
                    Verteilung erhalten bleibt. Durch die gezielte Holzung wird eine Überalterung sowie eine Erkrankung
                    des Waldes verhindert. In der Lenk wird grossen Wert auf die nachhaltige Bewirtschaftung gelegt; es
                    wird nie mehr Holz verabeitet, als nachwächst.
                </PinParallax>
            </div>
        );
    }
}