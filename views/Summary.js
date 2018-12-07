import './Summary.css'

export default class extends React.Component {

    constructor(props) {
        super(props)
    }
    

    render() {

        return (
            <div id={this.props.id} className='scene'>
                
                <div className="summary">
                    <div  className="summary-text" >
                        <h2>Zusammenfassung</h2>
                        <p>Zugegeben, äusserlich sieht Schweizer Holz nicht besser aus, aber es verfügt über unübertreffliche innere Werte. Denn Sie wissen: Das Produkt in Ihren Händen oder das Holz in Ihrem Haus wurde nicht weit transportiert, was Energie spart. Sie sind damit Teil eines regionalen Wirtschaftskreislaufes. Die Fachleute haben den Rohstoff qualitativ sorgsam verarbeitet und zu guter Letzt: Sie wissen, woher er kommt – aus dem Schweizer Wald. Dank Holznutzung bleibt der fit und stabil.</p>
                    </div>
            
                    <div className="summary-grid">
                        <div className="summary-icon">
                            <object type="image/svg+xml" data="/static/summary/Summary01.svg"
                                className='icon'>Your browser does not support SVGs
                            </object>
                            <h3>Waldpflege</h3>
                            <p>Zugegeben, äusserlich sieht Schweizer Holz nicht besser aus, aber es verfügt über unübertreffliche innere Werte.</p>
                        </div>
                        <div className="summary-icon">
                            <object type="image/svg+xml" data="/static/summary/Summary02.svg"
                                className='icon'>Your browser does not support SVGs
                            </object>
                            <h3>Holzwirtschaft</h3>
                            <p>Zugegeben, äusserlich sieht Schweizer Holz nicht besser aus, aber es verfügt über unübertreffliche innere Werte.</p>
                        </div>
                        <div className="summary-icon">
                            <object type="image/svg+xml" data="/static/summary/Summary03.svg"
                                className='icon'>Your browser does not support SVGs
                            </object>
                            <h3>Ökologie</h3>
                            <p>Zugegeben, äusserlich sieht Schweizer Holz nicht besser aus, aber es verfügt über unübertreffliche innere Werte.</p>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}