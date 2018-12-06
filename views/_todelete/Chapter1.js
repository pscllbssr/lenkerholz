import './Chapter.css';
import './Chapter1.css';
import ScrollTrigger from 'react-scroll-trigger';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';


export default class extends React.Component {

    constructor(props){

        super(props)
        this.state = { visible: false }
    }

    onEnterViewport() {
        this.setState({
          visible: true,
        });
      }
     
      onExitViewport() {
        this.setState({
          visible: false,
        });
      }

    render(){

        const {
            visible,
          } = this.state;

        return (
            <section className="chapter chapter-1">
                    <div className="animation">
                        <object type="image/svg+xml" data="/static/chapter1/Chapter1.svg">Your browser does not support SVGs</object>
                    </div>
                    <div className="text">
                        <h2>Waldpflege</h2>
                        <h3>Der Wald nimmt eine Schutzfunktion ein</h3>
                        Beinahe 90% der Waldfläche der Gemeinde Lenk ist als Schutzwald beschrieben und benötigt eine nachhaltige, intensive Pflege. <br></br>
                        Davon sind:
                  
                        <ul>
                            <li>1331ha Gerinneschutzwald (65% der Gesamtwaldfläche)       </li>
                            <li>559ha   Lawinenschutzwald (27%)</li>
                            <li>112ha	Hangmurenschutzwald (5%)</li>
                            <li>50ha  	Steinschlagschutzwald (2.5%)</li>
                            <li>3ha    	Rutschschutzwald (0.15%)</li>
                        </ul>
                        
                         
                        <h3>Wohlfahrts- und Nutzfunktion</h3>
                        Neben seiner Schutzfunktion dient der Wald auch als Lebensraum für zahlreiche einheimische Tiere und Pflanzen. Er bildet eine naturnahe Lebensgemeinschaft und bietet ein natürliches Erholungsgebiet. Durch das filtern von Luft und Wasser übernimmt der Wald auch eine wichtige Nutzfunktion.
                        
                         
                        <h3>Eine aktive Bewirtschaftung wird benötigt</h3>
                        Damit der Wald diese Funktionen erbringen kann, ist eine aktive Bewirtschaftung und Pflege erforderlich. Diese stellt sichergestellt, dass der Wald in seiner Fläche und in seiner räumlichen Verteilung erhalten bleibt. Durch die gezielte Holzung wird eine Überalterung sowie eine Erkrankung des Waldes verhindert. In der Lenk wird grossen Wert auf die nachhaltige Bewirtschaftung gelegt; es wird nie mehr Holz verabeitet, als nachwächst.
                    </div>
                                        
            </section>           
        );
    }
}