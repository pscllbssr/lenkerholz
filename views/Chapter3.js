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
                Der Transport von Holz erzeugt, je nach Transportweg, einen grossen Teil des ausgestossenen Treibhausgases der Holzproduktion. Bei lokal geschlagenem Holz sind die Transportwege aufs Minimum reduziert. <br></br><br></br>
                Während der Lebenszeit eines Baumes bindet dieser CO2. Wird ein Baum für Energie- oder Wärmegewinnung verbrannt, gibt er nur so viel des Treibhausgases wieder frei, wie er während seiner Lebenszeit gespeichert hatte. Somit kann Holz als CO2-neutrale Alternative zu Kohle, Öl und Gas verwendet werden. <br></br><br></br>
                Die Herstellung von Holzprodukten verbraucht viel weniger Energie, als jene anderer Baustoffe wie z.B. Beton. Durch diese Energieeffizienz sinkt der Ausstoss von Treibhausgasen erheblich. 
                    
                

                <h3>Mehrere Leben</h3>
                Holz- und Holzprodukte sind vielseitig einsetzbar im ganzen Lebenszyklus
                <ul>
                        <li>                        
                            Zurückgewonnene Bauteile aus Holz lassen sich direkt wiederverwenden
                        </li>                                
                        <li>                        
                            Durch Verbrennung kann Wärme und Energie erzeugt werden
                        </li>                                                                
                        <li>                        
                            Der Kreislauf der Natur schliesst sich durch die Verbrennung wieder
                        </li>
                </ul>
                Holz ist ein Naturprodukt und kennt keinen Abfall. Wer Schweizer Holz verwendet, trägt dazu bei, dass der Wald fit und stabil bleibt.

            </div> 
                    
            </section>           
        );
    }
}