export default class extends React.Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <div id={this.props.id} className='scene' style={{background: '#b4ded4'}}>
                    <object type="image/svg+xml" data="/static/chapter1/Forest02.svg"
                            className='scene__background'>Your browser does not support
                        SVGs
                    </object>
                    <div className="text">
                        <h2>Waldpflege</h2>
                        <h3>Der Wald nimmt eine Schutzfunktion ein</h3>
                        Beinahe 90% der Waldfläche der Gemeinde Lenk ist als Schutzwald beschrieben und benötigt eine nachhaltige, intensive Pflege. <br></br>
                        Davon sind:

                        <ul>
                            <li>1331ha Gerinneschutzwald (65% der Gesamtwaldfläche)       </li>
                            <li>559ha   Lawinenschutzwald (27%)</li>
                            <li>112ha	Hangmurenschutzwald (5%)</li>
                            <li>50ha  	Steinschlagschutzwald (2.5%)</li>
                            <li>3ha    	Rutschschutzwald (0.15%)</li>
                        </ul>
                    </div>
                </div>
        );
    }
}