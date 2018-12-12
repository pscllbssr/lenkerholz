import classNames from 'classnames';

export default class extends React.Component {

    render(){

        let even = ((Math.round(this.props.progress*10))% 2) === 0;

        const childrenWithExtraProp = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                className: classNames({
                    'hidden': even === !!index,
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