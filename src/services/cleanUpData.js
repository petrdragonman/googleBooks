const cleanUpData = (data) => {
  const result = data.items.map((item) => {
    const id = item.id;
    const title = item.volumeInfo.title;
    const description = item.volumeInfo.description;
    const authors = item.volumeInfo.authors;
    const image = item.volumeInfo.imageLinks;
    
    return {
      id,  
      title,
      description,
      authors,
      image,
    };
  });
  return result;
};

export default cleanUpData;


/**
 * const cleanUpData = (data) => {
  const result = data.items.map((item) => {
    const id = item.id;
    const title = item.volumeInfo.title;
    const description = item.volumeInfo.description;
    const authors = item.volumeInfo.authors;
    const image = item.volumeInfo.imageLinks;
    
    return {
      id,  
      title,
      description,
      authors,
      image,
    };
  });
  console.log("clean up data result: ", result);
  return result;
};
 */