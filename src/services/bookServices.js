import cleanUpData from "./cleanUpData";

export const getBooks = async ({searchTerm}) => {
    // GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey
    const APIKey = 'AIzaSyBPrRwFeAPbma8oXMoeFzQS0-wS26mBTnw';
    // &key=yourAPIKey
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
    console.log("in get books: ", searchTerm);
    //const url = 'https://www.googleapis.com/books/v1/volumes?q=cat';
    
    const url = `${baseUrl}${searchTerm}&key=${APIKey}`;
    //const url = baseUrl+"cats&key="+APIKey;
    console.log("url: ", url);

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