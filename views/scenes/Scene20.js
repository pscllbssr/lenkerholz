export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter2/Industrie01.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <div className="text">
                    <h2>Investition in die lokale Wirtschaft</h2>

                    <h3>Forstwirtschaft</h3>
                    Die Bäume werden durch genaue Untersuchung gekennzeichnet und durch speziell ausgebildetes Personal
                    geschlagen. Das ist nur einer der Gründe, warum die einheimische Waldwirtschaft vor grossen
                    Herausforderungen steht. Das Terrain der Lenker Wälder ist durch zahlreiche Felsschluchten
                    gezeichnet, was die Arbeiten erschwert. Die Wettbewerbsfähigkeit ist durch diesen grossen
                    Mehraufwand schwierig zu gewährleisten. Durch Unterstützung der heimischen Forstwirtschaft werden
                    zahlreiche Stellen sichergestellt.
                </div>
            </div>
        );
    }
}