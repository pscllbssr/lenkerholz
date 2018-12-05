import Hallo from '../components/HelloWorld'
import './Header.css'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export default class extends React.Component {
    render(){
        return (
            <header id="header">
                <div className="content-wrapper">
                    <h1>Interessiert?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p><button>Anruf</button></p>
                    <div id="trigger" />
                    <Controller>
                        <Scene
                            triggerElement="#trigger"
                            duration={500}>
                            {(progress) => (
                            <Tween
                                from={{
                                    right: '0px'
                                }}            
                                to={{
                                right: '100vw'
                                }}       
                                ease="Strong.easeOut"
                                totalProgress={progress}
                                paused
                            >
                                <div className="tween" style={{'background':'transparent'}}><img src="/static/img/chopper.png" width="300" /></div>
                            </Tween>    
                            )}
                        </Scene>
                        </Controller>
                </div>
            </header>           
        );
    }
}