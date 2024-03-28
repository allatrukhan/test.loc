import CloseBtn from '../Buttons/CloseBtn/CloseBtn';
import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import SearchBtn from '../Buttons/SearchBtn/SearchBtn';
import './SearchBlock.scss';

// const dataPost = [
//     {
//       id: nanoid(),
//       title: "Define searchable test data",
//       descirption: "This is the dataset for our application, which will be used in search queries to generate results. We will also create a simple table with columns for name, age, and email, and fill it with this sample data.",
//       puplicationDate: "12 august 2023", 
//     },
//     {
//         id: nanoid(),
//         title: "Define searchable test data",
//         descirption: "This is the dataset for our application, which will be used in search queries to generate results. We will also create a simple table with columns for name, age, and email, and fill it with this sample data.",
//         puplicationDate: "12 august 2023", 
//       },

//       {
//         id: nanoid(),
//         title: "Define searchable test data",
//         descirption: "In a production application, this will likely come from a database or some other source as opposed to being hard-coded, but we’re using an array here for illustrative purposes.",
//         puplicationDate: "25 march 2023", 
//       },
//       {
//         id: nanoid(),
//         title: "Displayed to the user in",
//         descirption: "This state will dictate what is displayed to the user in our application UI. We’re passing in the initial data we defined to begin with, so by default all data will be shown to the user.",
//         puplicationDate: "12 november 2023", 
//       },
//       {
//         id: nanoid(),
//         title: "Actually an empty string",
//         descirption: "Next, we check if the search term is actually an empty string. If so, it means there’s nothing in the search box (the user likely typed something before, and then deleted it), and we set the search results to display all of our initial searchable data.",
//         puplicationDate: "12 august 2023", 
//       },

// ]

function SearchBlock({closeBtn}){

        const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filteredResults = searchResults.filter((result) =>
          result.title.includes(query)
        );
        setSearchResults(filteredResults);
        };

        const [searchQuery, setSearchQuery] = useState('');
        const [searchResults, setSearchResults] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState('');
  
        useEffect(() => {

            const fetchData = async () => {
            try {
                const response = await axios.get(
                "https://kr.consumer.gov.ua/"
            );
                setSearchResults(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data. Please try again.');
                setLoading(false);
            }};
                fetchData();
        }, []);


    return(
        <div className="container row search-block">
            
    
    <div className="content-search-block">
        <div className="close-search-block-btn col-12 d-flex justify-content-end p-0">
                 <CloseBtn closeBtn={closeBtn}/>
            </div>
           
        <div className="search-title col-12 p-0">
            <p className="menu-search-title">Пошук на порталі</p>
        </div>
        <div className="search-on-portal col-12 p-0">
            <form className="form-inline-blok">
                <input className="form-control" type="text" placeholder="Search..." value={searchQuery} 
                        onChange={handleSearch} aria-label="Search"/>
                        {loading ? (<p>Loading...</p>) : (<ul>{searchResults.map((result) => (
                                                            <li key={result.id}>{result.title}</li>))}
                                                        </ul>
                        )}
                        {error && <p>{error}</p>}
                <div className="search-search-block">
                    <button type="submit" className="btn-search-search-block">
                        <img src=".././images/search.png" className="search-img" alt="search img"/>
                        <span>Пошук</span>
                    </button>
                </div>  
            </form>
        </div>
    </div>
</div>
    )

}

export default SearchBlock;   