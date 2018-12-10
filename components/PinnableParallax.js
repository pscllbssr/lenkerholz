export default class extends React.Component {

    calculateRelativeProgress(from,to,progress){
        return 100/(to-from)*(progress-from);
    }

    calculateInvertedRelativeProgress(from, to, progress){
        return (this.calculateRelativeProgress(from, to, progress)-100)*-1;
    }

    render(){
        let styles = {};
        if(this.props.progress < this.props.in){
            let relativeProgress = this.calculateInvertedRelativeProgress(0, this.props.in, this.props.progress);
            styles = {transform: 'translateY(' + relativeProgress + '%)'}
        } else if (this.props.progress > this.props.out){
            let relativeProgress = ((this.calculateRelativeProgress(0, this.props.in, this.props.progress)-100)*-1);
            styles = {transform: 'translateY(-' + this.calculateRelativeProgress(this.props.out, 1, this.props.progress) + '%)'}
        }

        return (
            <div className={this.props.className} style={styles}>
                {this.props.children}
            </div>
        );
    }
}