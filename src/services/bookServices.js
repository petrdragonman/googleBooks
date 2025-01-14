export const getBooks = async () => {
    console.log("hello");
    const url = 'https://www.googleapis.com/books/v1/volumes?q=Furry_gromit';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch book.');
    }
    const data = await response.json();
    console.log(data);
    return data;
};