import PinParallax from '../../components/PinnableParallax'
import FallDown from '../../components/FallDown'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {


        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter2/Chapter02_base.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <FallDown className='scene__background' progress={this.props.progress} start={0.2} end={0.3}>
                    <object type="image/svg+xml" data="/static/chapter2/Chapter02_scene1.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
            
                <h1 class="Kategorie">Investition in die lokale Wirtschaft</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    
                    <h3>Forstwirtschaft</h3>
                    Die Bäume werden durch genaue Untersuchung gekennzeichnet und durch speziell ausgebildetes Personal
                    geschlagen. Das ist nur einer der Gründe, warum die einheimische Waldwirtschaft vor grossen
                    Herausforderungen steht. Das Terrain der Lenker Wälder ist durch zahlreiche Felsschluchten
                    gezeichnet, was die Arbeiten erschwert. Die Wettbewerbsfähigkeit ist durch diesen grossen
                    Mehraufwand schwierig zu gewährleisten. Durch Unterstützung der heimischen Forstwirtschaft werden
                    zahlreiche Stellen sichergestellt.
                </PinParallax>
            </div>
        );
    }
}