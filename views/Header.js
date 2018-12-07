
import './Header.css'

export default class extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/xxx.svg"
                        className='scene__background'>
                    
                </object>
                <div className="visible logogrid">
                    
                    <img id="logo" src="../static/img/logo.png"></img>
                    <h1 id="logoText">Lenker Holz</h1>
                </div>
            </div>
        );
    }
}