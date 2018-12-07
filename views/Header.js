export default class extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest01.svg"
                        className='scene__background'>
                    Your browser does not support SVGs
                </object>
                <div className="text visible">
                    <h1>Lenker Holz</h1>
                    <p>natürlicher Halt</p>
                    <img src="../static/img/logo.jpeg"></img>
                </div>
            </div>
        );
    }
}