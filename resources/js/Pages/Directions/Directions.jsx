import Layout from '../Layout';
import './Directions.scss';

function Directions(){

    return(
        <>
        <Head title="Напрямки" />
       
            <h1>Напрямки</h1>
        
        </>
    )
}

Directions.layout = page => <Layout children={page} title="Напрямки" />

export default Directions;   