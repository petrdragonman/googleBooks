import cleanUpData from "./cleanUpData";
import APIKEY from '../secret/secret.js';

export const getBooks = async ({searchTerm}) => {
    
    //const APIKEY = 'AIzaSyBPrRwFeAPbma8oXMoeFzQS0-wS26mBTnw';
    console.log(APIKEY);
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const url = baseUrl+searchTerm+"&key="+APIKEY;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch book.');
    }
    const data = await response.json();
    return cleanUpData(data);
};


/**
 * data.items = []
 * data.items.map((item) => {item.volumeInfo.tile, item.volumeInfo.description, item.volumeInfo.authors} )
 * volumeInfo.title
 * volumeInfo.description
 * volumeInfo.authors = []
 */

// example
// const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=cat&key=AIzaSyBPrRwFeAPbma8oXMoeFzQS0-wS26mBTnw';
// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey