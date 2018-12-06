import Hallo from '../components/HelloWorld'
import Header from '../views/Header'
import Chapter1 from '../views/Chapter1'
import Chapter2 from '../views/Chapter2'
import Chapter3 from '../views/Chapter3'
import Summary from '../views/Summary'
import Contact from '../views/Contact'
import ScrollContainer from '../views/ScrollContainer'
import { Controller, Scene } from 'react-scrollmagic';

import 'normalize.css'
import 'animate.css'
import './index.css'

export default class extends React.Component {
    render(){
        return (
            <ScrollContainer />
        );
    }
}
