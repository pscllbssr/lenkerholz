export default class extends React.Component {

    render() {
        return (
            <div className={'scroll-down__container'}>

                <style jsx>{`
                .scroll-down__container{
                    position: absolute;
                    bottom: 15vh;
                    left: 50%;
                    animation: scroll 1s ease infinite;
                }

                .scroll-down__icon
                {

                    position: absolute;
                    top: 0;
                    left: 50%;
                    width: 24px;
                    height: 24px;
                    margin-left: -12px;
                    border-left: 2px solid #3a5e48;
                    border-bottom: 2px solid #3a5e48;
                    -webkit-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                    box-sizing: border-box;
                }

                @keyframes scroll{
                  0%{
                        opacity: 1;
                    }
                  100%{
                        opacity: 0;
                        transform: translateY(46px);
                    }
                }


    `}</style>

                <span className={'scroll-down__icon'}> </span>
                {this.props.children}
            </div>
        );
    }
}