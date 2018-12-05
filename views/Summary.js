import './Chapter.css';
import './Summary.css';
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
            <section className="section summary">
                <div className="text-content">
                    <div>
                        <h2>Zusammenfassung</h2>
                        <p>Sed semper consequat elementum. Nullam convallis porta hendrerit. In facilisis, nibh
                        quis elementum varius, mauris mauris laoreet leo, id consectetur arcu enim id ligula.

                        Ut scelerisque eu tellus ac laoreet. Cras fermentum magna in arcu

                        pharetra aliquet. Nunc sed condimentum purus.</p>
                    </div>
                    <div className="summary-grid">
                        <div>
                            <h3>Waldpflege</h3>
                        </div>
                        <div>
                            <h3>Holzwirtschaft</h3>
                        </div>
                        <div>
                            <h3>Ökologie</h3>
                        </div>
                    </div>

                </div>
                    
            </section>           
        );
    }
}