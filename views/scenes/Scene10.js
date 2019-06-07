import './Scene10.css';
import PinParallax from '../../components/PinnableParallax'
import FallDown from '../../components/FallDown'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                <object type="image/svg+xml" data="/static/chapter1/Forest.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <FallDown className='scene__background behind-scene-background' progress={this.props.progress} start={0.2} end={0.3}>
                    <object type="image/svg+xml" data="/static/chapter1/Rock01.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
                <FallDown className='scene__background behind-scene-background' progress={this.props.progress} start={0.22} end={0.35}>
                    <object type="image/svg+xml" data="/static/chapter1/Rock02.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
                <FallDown className='scene__background behind-scene-background' progress={this.props.progress} start={0.25} end={0.37}>
                    <object type="image/svg+xml" data="/static/chapter1/Rock03.svg"
                            className=''>Your browser does not support SVGs
                    </object>
                </FallDown>
                <h1 className="Kategorie">Waldpflege</h1>
                <PinParallax className='text' progress={this.props.progress} in={0.2} out={0.8}>
                        
                        
                        <h3>Der Wald nimmt eine Schutzfunktion ein</h3>
                        Beinahe 90% der Waldfläche der Gemeinde Lenk ist als Schutzwald beschrieben und benötigt eine
                        nachhaltige, intensive Pflege. <br></br>
                        Davon sind:

                        <ul>
                            <li>1331ha Gerinneschutzwald (65% der Gesamtwaldfläche)</li>
                            <li>559ha Lawinenschutzwald (27%)</li>
                            <li>112ha Hangmurenschutzwald (5%)</li>
                            <li>50ha Steinschlagschutzwald (2.5%)</li>
                            <li>3ha Rutschschutzwald (0.15%)</li>
                        </ul>
                       
                </PinParallax>



            </div>
        );
    }
}