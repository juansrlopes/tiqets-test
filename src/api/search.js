export async function fetchSearchResults(query) {
  // fetching the data using the query passed by the search component
  try {
    const productsQuery = await fetch(
      `http://localhost:3001/products?q=${query}`
    );
    // if the server does not send an OK answer then send a message to user
    if (productsQuery.ok === false) {
      const element = document.querySelector(".App-main");
      element.innerHTML +=
        "<div class='alert-message'>Something went wrong! Check back later...</div>";
    }
    // returning an empty array if the query is empty but the request is ok
    if (productsQuery.ok && query === "") {
      return [];
    }
    // converting data to json format
    const productsJson = await productsQuery.json();
    return productsJson;
  } catch (err) {
    console.log(err);
  }
}
