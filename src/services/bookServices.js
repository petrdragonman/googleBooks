import cleanUpData from "./cleanUpData";

export const getBooks = async ({searchTerm}) => {
    
    const APIKey = 'AIzaSyBPrRwFeAPbma8oXMoeFzQS0-wS26mBTnw';
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    const url = baseUrl+searchTerm+"&key="+APIKey;
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