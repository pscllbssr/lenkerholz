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
                    
                <h3>Forstwirtschaft</h3>
                Die Bäume werden durch genaue Untersuchung gekennzeichnet und durch speziell ausgebildetes Personal geschlagen. Das ist nur einer der Gründe, warum die einheimische Waldwirtschaft vor grossen Herausforderungen steht. Das Terrain der lenker Wälder ist durch zahlreiche Felsschluchten gezeichnet, was die Arbeiten erschwert. Die Wettbewerbsfähigkeit ist durch diesen grossen Mehraufwand schwierig zu gewährleisten. Durch Unterstützung der heimischen Forstwirtschaft werden zahlreiche Stellen sichergestellt. 
 
                <h3>Holztransport</h3>
                Das Holz in der Lenk wird unter anderem mittels Seilkran oder Hubschrauber die vielen Schluchten hinunter transportiert. Weiter werden die frisch geschlagenen Stämme von hiesigen Transportunternehmen in lokale Sägereien geliefert. Die lokale Holzwirtschaft von Forstwirtschaft, Transportunternehmen und Sägereien schaffen zusätzliche Stellen in der Region Lenk.

                <h3>Holzverarbietung</h3>
                Durch die Unterstützung von Lenker Holz ermöglichen sie den Sägereien, Hand in Hand mit den Transportunternehmen zu arbeiten. Die frisch geschlagenen Stämme werden dort zu unterschiedlichsten Holz-Variationen verarbeitet. Später werden sie an verschiedene Zimmereien, Schreinereibetriebe und Möbelfirmen rund um den Raum Adelboden - Lenk geliefert.

                <h3>Holzbau</h3>
                Die gelieferten Güter aus Holz finden die unterschiedlichsten Anwendungsformen. Zimmereien bauen daraus elegante Chalets, Schreiner fertigen aus dem Lenker Holz angenehme, heimelige Böden und stilvolle Türen. Zudem werden aus dem heimischen Hölzern exklusive Möbel hergestellt. Dies mit minimalster Umweltbelastung. Somit kann zu Hause mit gutem Gewissen ein Holzmöbel aus der Lenk aufgestellt werden.   

            </div>
                    
                    
            </section>           
        );
    }
}