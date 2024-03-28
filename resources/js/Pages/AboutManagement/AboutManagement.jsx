import { Head } from '@inertiajs/react';
import Layout from '../Layout';


function AboutManagement(){
            
    return(
        <>
        <Head title="Про управління" />
        <h1>Про управління</h1>
        </>
    )
             
}

AboutManagement.layout = page => <Layout children={page} title="Про управління" />

export default AboutManagement;   
