export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fallOff: this.props.fallOff || 0.9};
    }

    calculateRelativeProgress(from,to,progress){
        return 100/(to-from)*(progress-from);
    }

    calculateInvertedRelativeProgress(from, to, progress){
        return (this.calculateRelativeProgress(from, to, progress)-100)*-1;
    }

    render(){
        const sign = this.props.inverted ? '' : '-';
        let styles = {transform: 'translateY(' + sign + '100vh)'};
        if(this.props.progress > this.props.start && this.props.progress < this.props.end){
            let relativeProgress = this.calculateInvertedRelativeProgress(this.props.start, this.props.end, this.props.progress);
            styles = {transform: 'translateY(' + sign + relativeProgress + 'vh)'}
        }else if(this.props.progress > this.props.end && this.props.progress < this.state.fallOff){
            styles = {};
        }else if(this.props.progress > this.state.fallOff){
            let relativeProgress = this.calculateRelativeProgress(0.9, 1, this.props.progress);
            styles = {transform: 'translateY(' + sign + relativeProgress + 'vh)'}
        }

        return (
            <div className={this.props.className} style={styles}>
                {this.props.children}
            </div>
        );
    }
}