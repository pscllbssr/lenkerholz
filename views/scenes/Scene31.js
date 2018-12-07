export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let textClass= 'text';

        if (this.props.progress > 0.2 && this.props.progress < 0.8) {
            textClass += ' visible';
        } else if (this.props.progress > 0.8) {
            textClass += ' out';
        }

        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter3/chapter30.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <div className={textClass}>
                    <h2>Ökologie</h2>

                    <h3>Mehrere Leben</h3>
                        Holz- und Holzprodukte sind vielseitig einsetzbar - über alle Stadien hinweg
                        <ul>
                            <li>                        
                                Die verschiedenen Holzarten, der Wuchsstandort und die individuelle Maserung bieten viele Einsatzmöglichkeiten in technischer und optischer Hinsicht
                            </li> 
                            <li>                        
                                Zurückgewonnene Bauteile aus Holz lassen sich nahezu verlustfrei wiederverwenden
                            </li>                                
                            <li>                        
                                Durch Verbrennung kann Wärme und Energie CO2-neutral erzeugt werden. 
                            </li>                                                                
                            <li>                        
                                Vermodernde Restbestände der Forstwirtschaft bilden neuen Nährboden für nachwachsende Pflanzen sowie Lebensraum für Tiere. 
                            </li>
                        </ul>
                        Holz ist ein Naturprodukt und kennt keinen Abfall. Wer Lenker Holz verwendet trägt dazu bei, dass der Wald fit und stabil bleibt.
                </div>
            </div>
        );
    }
}