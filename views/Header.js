export default class extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Chapter1_.svg"
                        className='scene__background'>
                    Your browser does not support SVGs
                </object>
                <div>{this.props.progress}</div>
                <div className="text">
                    <h1>Lenker Holz</h1>
                </div>

            </div>
        );
    }
}