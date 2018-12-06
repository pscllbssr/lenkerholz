import './Chapter.css'
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
            <section className="chapter chapter-3">
            <div className="animation">
                <ScrollTrigger onEnter={this.onEnterViewport.bind(this)} onExit={this.onExitViewport.bind(this)} triggerOnLoad={false}>
                            <div className={`content-wrapper ${visible ? 'animated rubberBand' : ''}`}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
                                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore 
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                <ul>
                                    <li>                        
                                        <a href="http://makeyourmoneymatter.org/">http://makeyourmoneymatter.org/</a>
                                    </li>                                
                                    <li>                        
                                        <a href="https://codepen.io/zjun/pen/dGPqzQ">https://codepen.io/zjun/pen/dGPqzQ</a>
                                    </li>                                                                
                                    <li>                        
                                        <a href="http://www.nytimes.com/projects/2013/tomato-can-blues/index.html">http://www.nytimes.com/projects/2013/tomato-can-blues/index.html</a>
                                    </li>
                                </ul>

                                
                            </div>
                        </ScrollTrigger>
            </div>
            <div className="text">
                <h2>Ökologie</h2>
                
                <h3>Weniger Treibhausgase</h3>
                Der Wald ist CO2 – bindend. Wir ein Baum für Energie- oder Wärmegewinnung verbrannt, gibt er nur so viel vom Treibhausgas wieder frei, wie er gespeichert hatte. Die Herstellung von Holzprodukten verbraucht viel weniger Energie, als jene anderer Baustoffe. Durch diese Energieeffizienz sinkt der Ausstoss von Treibhausgasen erheblich. Bei lokal geschlagenem Holz sind die Transportwege erheblich kürzer. Der Ausstoss von CO2 wird durch diese Tatsache um ein grosses Mass verringert.


                <h3>Mehrere Leben</h3>
                Holz- und Holzprodukte sind vielseitig einsetzbar im ganzen Lebenszyklus
                -        Zurückgewonnene Bauteile aus Holz lassen sich direkt wiederverwenden
                -        Durch Verbrennung kann Wärme und Energie erzeugt werden
                -        Der Kreislauf der Natur schliesst sich durch die Verbrennung wieder
                
                
                Holz ist ein Naturprodukt und kennt keinen Abfall. Wer Schweizer Holz verwendet, trägt dazu bei, dass der Wald fit und stabil bleibt.

            </div> 
                    
            </section>           
        );
    }
}