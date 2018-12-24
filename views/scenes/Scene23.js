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
                    <object type="image/svg+xml" data="/static/chapter2/Chapter02_scene4.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
                <h1 class="Kategorie">Investition in die lokale Wirtschaft</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                   

                    <h3>Holzbau</h3>
                    Die gelieferten Güter aus Holz finden die unterschiedlichsten Anwendungsformen. Zimmereien bauen daraus elegante Chalets, Schreiner fertigen aus dem Lenker Holz angenehme, heimelige Böden und stilvolle Türen. Zudem werden aus dem heimischen Hölzern exklusive Möbel hergestellt. Dies mit minimalster Umweltbelastung. Somit kann zu Hause mit gutem Gewissen ein Holzmöbel aus der Lenk aufgestellt werden.  
                </PinParallax>
            </div>
        );
    }
}