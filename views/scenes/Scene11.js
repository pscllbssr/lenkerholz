export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest03.svg"
                        className='scene__background'>Your browser does not support
                    SVGs
                </object>
                <div className="text">
                    <h2>Waldpflege</h2>
                    <h3>Wohlfahrts- und Nutzfunktion</h3>
                    Neben seiner Schutzfunktion dient der Wald auch als Lebensraum für zahlreiche einheimische Tiere und
                    Pflanzen. Er bildet eine naturnahe Lebensgemeinschaft und bietet ein natürliches Erholungsgebiet.
                    Durch das filtern von Luft und Wasser übernimmt der Wald auch eine wichtige Nutzfunktion.
                </div>
            </div>
        );
    }
}