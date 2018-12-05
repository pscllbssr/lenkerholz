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
            <section className="chapter chapter-2">
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

                <h2>Investition in die lokale Wirtschaft</h2>

                Das Holz in der Lenk wir unter anderem mittels Seilkran oder Hubschrauber die vielen Schluchten hinunter transportiert. Das ist nur einer der Gründe, warum die einheimische Waldwirtschaft vor grossen Herausforderungen steht. Die Wettbewerbsfähigkeit ist durch den grossen Mehraufwand schwierig zu gewährleisten.
 
                In vielen verschiedenen Gebieten der lokalen Holzwirtschaft werden durch die Nutzung von Lenker Holz Arbeitsplätze gesichert.
 
                -        Pflege des Waldes
                -        Forstwirtschaft
                -        Holztransport
                -        Holzverarbeitung
                -        Holzbau

            </div>
                    
                    
            </section>           
        );
    }
}