const cleanUpData = (data) => {
  const result = data.items.map((item) => {
    const id = item.id;
    const title = item.volumeInfo.title;
    const description = item.volumeInfo.description;
    const authors = item.volumeInfo.authors;
    const image = item.volumeInfo.imageLinks;
    const publisher = item.volumeInfo.publisher;
    const publishedDate = item.volumeInfo.publishedDate;
    const language = item.volumeInfo.language;
    const pageCount = item.volumeInfo.pageCount;
    const country = item.saleInfo.country;
    return {
      id,  
      title,
      description,
      authors,
      image,
      publisher,
      publishedDate,
      language,
      pageCount,
      country,
    };
  });
  return result;
};

export default cleanUpData;