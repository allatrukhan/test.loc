import { Head } from '@inertiajs/react';
import Layout from '../Layout';


function RegionalLab(){
            
    return(
        <>
        <Head title="Кіровоградська регіональна державна лабораторія ветеринарної медицини" />
        <h1>Кіровоградська регіональна державна лабораторія ветеринарної медицини</h1>
        </>
    )
             
}

RegionalLab.layout = page => <Layout children={page} title="Кіровоградська регіональна державна лабораторія ветеринарної медицини" />

export default RegionalLab;   

