import FactsVideoBlock from './FactsVideoBlock/FactsVideoBlock';
import NewsAnoncesBlock from './NewsAnoncesBlock/NewsAnoncesBlock';
import Layout from '../Layout';
import './HomeContent.scss';
import { Head } from '@inertiajs/react';

function HomeContent(){

    return(
        <>
        <Head title="Головна" />
        <div className="container row home-content">
            <div class="col-4">
                <FactsVideoBlock/>
            </div>
            <div class="col-8">
                <NewsAnoncesBlock/>
            </div>
        </div>
        </>
    )
}

HomeContent.layout = page => <Layout children={page} title="Головна" />

export default HomeContent;   