import PinParallax from '../../components/PinnableParallax'

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
                <object type="image/svg+xml" data="/static/chapter2/Industrie02.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                    <h2>Investition in die lokale Wirtschaft</h2>

                    <h3>Holztransport</h3>
                    Das Holz in der Lenk wird unter anderem mittels Seilkran oder Hubschrauber die vielen Schluchten hinunter transportiert. Weiter werden die frisch geschlagenen Stämme von hiesigen Transportunternehmen in lokale Sägereien geliefert. Die lokale Holzwirtschaft von Forstwirtschaft, Transportunternehmen und Sägereien schaffen zusätzliche Stellen in der Region Lenk.
                </PinParallax>
            </div>
        );
    }
}