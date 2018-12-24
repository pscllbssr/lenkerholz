import './Header.css'
import ScrollDown from '../components/ScrollDown';
import FallDown from '../components/FallDown';

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <FallDown className='' progress={this.props.progress} start={0} end={0}
                          inverted={false}>
                    <div className="visible logogrid">
                        <img id="logo" src="../static/img/logo.png"></img>
                        <h1 id="logoHeading">Lenker Holz</h1>
                        <h2 id="logoText">natürlicher Halt</h2>
                    </div>
                </FallDown>

                <ScrollDown/>

            </div>
        );
    }
}