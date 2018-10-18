import Hallo from '../components/HelloWorld'

export default class extends React.Component {
    render(){
        return (
            <div id="app">
                <section id="start">Welcome to Lenker Holz
                    <Hallo />
                </section>
                <section id="section">pimpam</section> 
                <h1>Test</h1>

                
                <style jsx>{`
                section {
                  color: blue;
                }
              `}</style>              
                
            </div>

           
        );
    }
}
