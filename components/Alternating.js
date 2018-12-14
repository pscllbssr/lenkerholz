import classNames from 'classnames';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {multiplier: parseInt(this.props.multiplier) || 15};
    }

    render(){



        let even = ((Math.round(this.props.progress*this.state.multiplier))% 2) === 0;

        const childrenWithExtraProp = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                className: classNames({
                    'hidden': even === !!index, // --> works only for 2 elements
                    ['' + child.props.className]: child.props.className
                })
            });
        });

        return (
            <div className={this.props.className}>
                {childrenWithExtraProp}
            </div>
        );
    }
}