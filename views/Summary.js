export default class extends React.Component {

    constructor(props) {
        super(props)
    }
    

    render() {

        return (
            <div id={this.props.id} className='scene'>
                
                <div className=".summary-grid">
                    <div>
                        
                        <p>Zugegeben, äusserlich sieht Schweizer Holz nicht besser aus, aber es verfügt über unübertreffliche innere Werte. Denn Sie wissen: Das Produkt in Ihren Händen oder das Holz in Ihrem Haus wurde nicht weit transportiert, was Energie spart. Sie sind damit Teil eines regionalen Wirtschaftskreislaufes. Die Fachleute haben den Rohstoff qualitativ sorgsam verarbeitet und zu guter Letzt: Sie wissen, woher er kommt – aus dem Schweizer Wald. Dank Holznutzung bleibt der fit und stabil.</p>
                    </div>
                    <div className="summary-grid">
                        <div>
                        
                            <h3>Waldpflege</h3>
                        </div>
                        <div>
                            <h3>Holzwirtschaft</h3>
                        </div>
                        <div>
                            <h3>Ökologie</h3>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}