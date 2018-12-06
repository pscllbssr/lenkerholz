export default class extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <div id={this.props.id} className='scene' style={{background: 'transparent'}}>
                    <object type="image/svg+xml" data="/static/chapter1/Bird.svg"
                            className=''>Your browser does not support
                        SVGs
                    </object>
                </div>
        );
    }
}