import PinParallax from '../../components/PinnableParallax'
import FallDown from '../../components/FallDown'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        let textClass= 'text';

        if (this.props.progress > 0.2 && this.props.progress < 0.8) {
            textClass += ' visible';
        } else if (this.props.progress > 0.8) {
            textClass += ' out';
        }

        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter2/Chapter02_base.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <FallDown className='scene__background' progress={this.props.progress} start={0.2} end={0.35}>
                    <object type="image/svg+xml" data="/static/chapter2/Chapter02_scene3.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    <h2>Investition in die lokale Wirtschaft</h2>

                    <h3>Holzverarbietung</h3>
                    Durch die Unterstützung von Lenker Holz ermöglichen sie den Sägereien, Hand in Hand mit den Transportunternehmen zu arbeiten. Die frisch geschlagenen Stämme werden dort zu unterschiedlichsten Holz-Variationen verarbeitet. Später werden sie an verschiedene Zimmereien, Schreinereibetriebe und Möbelfirmen rund um den Raum Adelboden - Lenk geliefert.
                </PinParallax>
            </div>
        );
    }
}