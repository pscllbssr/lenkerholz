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
                        Dank melden Sie sich direkt bei uns per E-Mail oder rufen Sie uns an.
                    </p>
                    <p><button>E-Mail</button></p>
                    <div className='phone'>
                        <img src="../static/img/chopper.png"></img>
                        <p>+41 79 123 45 67</p>
                    </div>
                    <div className="sdg">
                    <img src="../static/img/SDG.jpeg"></img>
                    </div>
                </div>
            

            </div>
        );
    }
}