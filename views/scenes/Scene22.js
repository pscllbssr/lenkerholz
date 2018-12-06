export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter2/Industrie03.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <div className="text">
                    <h2>Investition in die lokale Wirtschaft</h2>

                    <h3>Holzverarbietung</h3>
                    Durch die Unterstützung von Lenker Holz ermöglichen sie den Sägereien, Hand in Hand mit den Transportunternehmen zu arbeiten. Die frisch geschlagenen Stämme werden dort zu unterschiedlichsten Holz-Variationen verarbeitet. Später werden sie an verschiedene Zimmereien, Schreinereibetriebe und Möbelfirmen rund um den Raum Adelboden - Lenk geliefert.
                </div>
            </div>
        );
    }
}