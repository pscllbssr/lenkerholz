import Hallo from '../components/HelloWorld'
import './Contact.css'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export default class extends React.Component {
    render(){
        return (
            <div id={this.props.id} className='scene'>
                <div className='contact'>
                    <h1>Interessiert?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p><button>E-Mail</button></p>
                    <div className='phone'>
                        <img src="../static/img/chopper.png"></img>
                        <p>+41 79 123 45 67</p>
                    </div>
                </div>
            

            </div>
        );
    }
}