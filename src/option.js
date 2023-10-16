import axios from "axios";

export async function fetchImages(name) {
  try {
    let page = 1;
    let limit = 40;

    const parameters = new URLSearchParams({
      page: page,
      per_page: limit,
    });

    const url = `https://pixabay.com/api/?key=40081863-88b07571bc5633de8dffbf4dc&q=${name}&${parameters}&image_type=photo&orientation=horizontal&safesearch=true`;

    const response = await axios.get(url);
    const responseFormat = await response.data;
    page += 1;
    return responseFormat;
  } catch (error) {
    console.error(error);
    }
}