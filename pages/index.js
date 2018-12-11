import ScrollContainer from '../views/ScrollContainer';

import 'normalize.css'
//import 'animate.css'
import '../static/styles/animations.css'
import './index.css'
import scenes from "../static/data/scenes";

export default class extends React.Component {
    render(){
        return (
            <ScrollContainer scenes={scenes} />
        );
    }
}
