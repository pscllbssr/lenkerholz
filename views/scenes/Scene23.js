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
                <object type="image/svg+xml" data="/static/chapter2/Industrie04.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <div className={textClass}>
                    <h2>Investition in die lokale Wirtschaft</h2>

                    <h3>Holzbau</h3>
                    Die gelieferten Güter aus Holz finden die unterschiedlichsten Anwendungsformen. Zimmereien bauen daraus elegante Chalets, Schreiner fertigen aus dem Lenker Holz angenehme, heimelige Böden und stilvolle Türen. Zudem werden aus dem heimischen Hölzern exklusive Möbel hergestellt. Dies mit minimalster Umweltbelastung. Somit kann zu Hause mit gutem Gewissen ein Holzmöbel aus der Lenk aufgestellt werden.  
                </div>
            </div>
        );
    }
}