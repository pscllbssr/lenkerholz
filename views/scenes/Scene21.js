export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id} className='scene'>
                <object type="image/svg+xml" data="/static/chapter2/Industrie02.svg"
                        className='scene__background'>Your browser does not support SVGs
                </object>
                <div className="text">
                    <h2>Investition in die lokale Wirtschaft</h2>

                    <h3>Holztransport</h3>
                    Das Holz in der Lenk wird unter anderem mittels Seilkran oder Hubschrauber die vielen Schluchten hinunter transportiert. Weiter werden die frisch geschlagenen Stämme von hiesigen Transportunternehmen in lokale Sägereien geliefert. Die lokale Holzwirtschaft von Forstwirtschaft, Transportunternehmen und Sägereien schaffen zusätzliche Stellen in der Region Lenk.
                </div>
            </div>
        );
    }
}