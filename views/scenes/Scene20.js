export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div id={this.props.id}>
                <object type="image/svg+xml" data="/static/chapter2/Chapter2.svg"
                        id="svgChapter1">Your browser does not support
                    SVGs
                </object>
                <div className="text">
                    <h3>Eine aktive Bewirtschaftung wird benötigt</h3>

                    Damit der Wald die von ihm erwarteten Leistungen erbringen kann, ist eine aktive
                    Bewirtschaftung
                    und Pflege erforderlich. Die Entscheidung für Lenker Holz hilft mit, diese Leistungen zu
                    ermöglichen. In der Lenk wächst mehr Holz nach, als Waldbesitzer nutzen.
                </div>
            </div>
        );
    }
}