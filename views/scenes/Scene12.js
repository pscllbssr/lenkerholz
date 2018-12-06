export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest04.svg"
                        className='scene__background'>Your browser does not support
                    SVGs
                </object>
                <div className="text">
                    <h2>Waldpflege</h2>
                    <h3>Eine aktive Bewirtschaftung wird benötigt</h3>
                    Damit der Wald diese Funktionen erbringen kann, ist eine aktive Bewirtschaftung und Pflege
                    erforderlich. Diese stellt sichergestellt, dass der Wald in seiner Fläche und in seiner räumlichen
                    Verteilung erhalten bleibt. Durch die gezielte Holzung wird eine Überalterung sowie eine Erkrankung
                    des Waldes verhindert. In der Lenk wird grossen Wert auf die nachhaltige Bewirtschaftung gelegt; es
                    wird nie mehr Holz verabeitet, als nachwächst.
                </div>
            </div>
        );
    }
}