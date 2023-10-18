export const getData = async () => {
  try {
    const url = "http://localhost:3000/posts";
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
