import Layout from '../Layout';
import './Connections.scss';

function Connections(){

    return(
        <>
        <Head title="Зв'язки з громадськістю" />
       
            <h1>Зв'язки з громадськістю</h1>
        
        </>
    )
}

Connections.layout = page => <Layout children={page} title="Зв'язки з громадськістю" />

export default Connections;   