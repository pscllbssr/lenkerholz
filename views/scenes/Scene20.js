import PinParallax from '../../components/PinnableParallax'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        /*
        if (this.props.progress > 0.2 && this.props.progress < 0.8) {
            textClass += ' visible';
        } else if (this.props.progress > 0.8) {
            textClass += ' out';
        }*/

        let faderClass = 'scene__background fadeIn';
        if (this.props.progress > 0.3 && this.props.progress < 0.9) {
            faderClass += ' visible';
        } else if (this.props.progress > 0.9) {
            faderClass += ' out';
        }


        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter2/Industrie01_back.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <object type="image/svg+xml" data="/static/chapter2/Industrie01.svg"
                        className={faderClass}>Your browser does not support SVGs
                </object>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    <h2>Investition in die lokale Wirtschaft</h2>
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