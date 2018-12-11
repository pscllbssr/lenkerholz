import classNames from 'classnames';

export default class extends React.Component {

    render(){
        let styles = classNames({
            ['' + this.props.className]: true,
            'svg-animated': true,
            'in': this.props.progress > this.props.in && this.props.progress < this.props.out,
            'out': this.props.progress > this.props.out
        });

        return (
            <div className={styles} id={this.props.id}>
                {this.props.children}
            </div>
        );
    }
}