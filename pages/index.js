import Hallo from '../components/HelloWorld'
import Header from '../views/Header'
import Section from '../views/Section'

import 'normalize.css'
import './index.css'

export default class extends React.Component {
    render(){
        return (
            <div id="app">
                <Header />
                <Section />
                <Section />
            </div>           
        );
    }
}
