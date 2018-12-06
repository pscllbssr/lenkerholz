import ScrollContainer from '../views/ScrollContainer';

import 'normalize.css'
import 'animate.css'
import './index.css'
import '../views/Summary.css'
import scenes from "../views/scenes";

export default class extends React.Component {
    render(){
        return (
            <ScrollContainer scenes={scenes} />
        );
    }
}
