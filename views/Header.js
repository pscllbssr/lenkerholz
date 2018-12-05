import './Header.css'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

export default class extends React.Component {
    render(){
        return (
            <header id="header">
                <div className="content-wrapper">
                    <h1>Lenker Holz</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
            </header>           
        );
    }
}