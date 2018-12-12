export default class extends React.Component {

    calculateRelativeProgress(from,to,progress){
        return 100/(to-from)*(progress-from);
    }

    calculateInvertedRelativeProgress(from, to, progress){
        return (this.calculateRelativeProgress(from, to, progress)-100)*-1;
    }

    render(){
        const sign = this.props.inverted ? '' : '-';
        let styles = {transform: 'translateY(' + sign + '110%)'};
        if(this.props.progress > this.props.start && this.props.progress < this.props.end){
            let relativeProgress = this.calculateInvertedRelativeProgress(this.props.start, this.props.end, this.props.progress);
            styles = {transform: 'translateY(' + sign + relativeProgress + '%)'}
        }else if(this.props.progress > this.props.end){
            styles = {};
        }

        return (
            <div className={this.props.className} style={styles}>
                {this.props.children}
            </div>
        );
    }
}