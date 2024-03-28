import { Head } from '@inertiajs/react';
import Layout from '../Layout';
import './Connections.scss';

function Connections(){

    return(
        <div className='container connection-content'>
        <Head title="Зв'язки з громадськістю" />
       
            <h1>Зв'язки з громадськістю</h1>
        
        </div>
    )
}

Connections.layout = page => <Layout children={page} title="Зв'язки з громадськістю" />

export default Connections;   