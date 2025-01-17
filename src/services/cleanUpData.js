const cleanUpData = (data) => {
  const result = data.items.map((item) => {
    const id = item.id;
    const title = item.volumeInfo.title;
    const description = item.volumeInfo.description;
    const authors = item.volumeInfo.authors;
    return {
      id,  
      title,
      description,
      authors,
    };
  });
  console.log("clean up data result: ", result);
  return result;
};

export default cleanUpData;
