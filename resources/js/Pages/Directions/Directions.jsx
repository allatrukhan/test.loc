import { Head } from '@inertiajs/react';
import Layout from '../Layout';
import './Directions.scss';

function Directions(){

    return(
        <div className='container directions-content'>
        <Head title="Напрямки" />

            <h1>Напрямки</h1>
        
        </div>
    )
}

Directions.layout = page => <Layout children={page} title="Напрямки" />

export default Directions;   