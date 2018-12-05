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
                        <h2>Waldpflege</h2>
                        <h3>Der Wald nimmt eine Schutzfunktion ein</h3>
                        Beinahe 90% der Waldfläche der Gemeinde Lenk ist als Schutzwald beschrieben und benötigt eine nachhaltige, intensive Pflege.
                        Davon sind
                        1331ha Gerinneschutzwald (65% der Gesamtwaldfläche)
                        559ha   Lawinenschutzwald (27%)
                        112ha	Hangmurenschutzwald (5%)
                        50ha  	Steinschlagschutzwald (2.5%)
                        3ha    	Rutschschutzwald (0.15%)
                         
                        <h3>Zweite Folie</h3>
                        Lebensraum für Tiere und Pflanzen
                        Der Wald übernimmt nebst Schutzfunktionen auch Nutz- und Wohlfartsfunktionen. Weiter ist der Wald auch Lebensraum für Pflanzen und Tiere und ein natürlicher Filter für Wasser und Luft. Diese drei Waldfunktionen sind im Waldgesetz erwähnt.
                         
                        <h3>Dritte Folie</h3>
                        Eine aktive Bewirtschaftung wird benötigt
                        Damit der Wald die von ihm erwarteten Leistungen erbringen kann, ist eine aktive Bewirtschaftung und Pflege erforderlich. Die Entscheidung für Lenker Holz hilft mit, diese Leistungen zu ermöglichen. In der Lenk wächst mehr Holz nach, als Waldbesitzer nutzen.

                    </div>
                                        
            </section>           
        );
    }
}