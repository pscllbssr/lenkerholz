export default class extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <div id={this.props.id}>
                <object type="image/svg+xml" data="/static/chapter1/Chapter1_.svg"
                        id="svgChapter1">Your browser does not support
                    SVGs
                </object>
                <div>{this.props.progress}</div>
                <div className="text" style={{left: 70}}>
                    <h1>Lenker Holz</h1>
                </div>

            </div>
        );
    }
}