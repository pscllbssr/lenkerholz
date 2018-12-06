export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id}>
                <object type="image/svg+xml" data="/static/chapter1/Chapter1.svg"
                        id="svgChapter1">Your browser does not support
                    SVGs
                </object>
                <div className="text">
                    <h3>Lebensraum für Tiere und Pflanzen</h3>

                    Der Wald übernimmt nebst Schutzfunktionen auch Nutz- und Wohlfartsfunktionen. Weiter ist
                    der
                    Wald auch Lebensraum für Pflanzen und Tiere und ein natürlicher Filter für Wasser und
                    Luft.
                    Diese drei Waldfunktionen sind im Waldgesetz erwähnt.
                </div>
            </div>
        );
    }
}