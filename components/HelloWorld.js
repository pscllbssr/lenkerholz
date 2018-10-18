export default class extends React.Component {
    render(){
        return (
            <h1>
                Ich bin eine Komponente
                
                <style jsx>{`
                h1 {
                  color: red;
                }
              `}</style>              
                
            </h1>
           
        );
    }
}