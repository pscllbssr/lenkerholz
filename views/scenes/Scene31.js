import PinParallax from '../../components/PinnableParallax'
import FallDown from '../../components/FallDown'
import './Scene31.css'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        // change to visible/hidden in css, not changing source!
        let image = '/static/chapter3/pascal_szene2.3_woodhugestack.svg';
        if (this.props.progress > 0.75) {
            image = '/static/chapter3/pascal_szene2.3_woodstacksmall.svg'
        } else if (this.props.progress > 0.5) {
            image = '/static/chapter3/pascal_szene2.3_woodstackmiddle.svg'
        } else if (this.props.progress > 0.25) {
            image = '/static/chapter3/pascal_szene2.3_woodstack.svg'
        }

        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data={image}
                        className='scene__background'>Your browser does not support SVGs
                </object>

                <FallDown className='scene__background' progress={this.props.progress} start={0.2} end={0.27}
                          inverted={false} id={'scene3__house'} fallOff={0.92}>
                    <object type="image/svg+xml" data='/static/chapter3/pascal_szene2.3_house.svg'
                            className='scene__background'>Your browser does not support SVGs
                    </object>
                </FallDown>

                <FallDown className='scene__background' progress={this.props.progress} start={0.45} end={0.53}
                          inverted={false} id={'scene3__furniture'} fallOff={0.95}>
                    <object type="image/svg+xml" data='/static/chapter3/pascal_szene2.3_möbel.svg'
                            className='scene__background'>Your browser does not support SVGs
                    </object>
                </FallDown>

                <FallDown className='scene__background' progress={this.props.progress} start={0.7} end={0.78}
                          inverted={false} id={'scene3__stove'} fallOff={0.96}>
                    <object type="image/svg+xml" data='/static/chapter3/pascal_szene2.3_stove.svg'
                            className='scene__background'>Your browser does not support SVGs
                    </object>
                </FallDown>
                <h1 className="Kategorie">Ökologie</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    

                    <h3>Mehrere Leben</h3>
                    Holz- und Holzprodukte sind vielseitig einsetzbar - über alle Stadien hinweg
                    <ul>
                        <li>
                            Die verschiedenen Holzarten, der Wuchsstandort und die individuelle Maserung bieten viele
                            Einsatzmöglichkeiten in technischer und optischer Hinsicht
                        </li>
                        <li>
                            Zurückgewonnene Bauteile aus Holz lassen sich nahezu verlustfrei wiederverwenden
                        </li>
                        <li>
                            Durch Verbrennung kann Wärme und Energie CO2-neutral erzeugt werden.
                        </li>
                        <li>
                            Vermodernde Restbestände der Forstwirtschaft bilden neuen Nährboden für nachwachsende
                            Pflanzen sowie Lebensraum für Tiere.
                        </li>
                    </ul>
                    Holz ist ein Naturprodukt und kennt keinen Abfall. Wer Lenker Holz verwendet trägt dazu bei, dass
                    der Wald fit und stabil bleibt.
                </PinParallax>
            </div>
        );
    }
}