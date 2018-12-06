import Hallo from '../components/HelloWorld'
import './Header.css'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export default class extends React.Component {
    render(){
        return (
            <div id={this.props.id} className='scene'>
                <div className='text'>
                    <h1>Interessiert?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <p><button>Anruf</button></p>
                </div>

            </div>
        );
    }
}