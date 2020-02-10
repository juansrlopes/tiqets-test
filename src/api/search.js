export async function fetchSearchResults(query) {
  // Write your code here
  try {
    const productsQuery = await fetch(
      `http://localhost:3001/products?q=${query}`
    );

    if (productsQuery.ok === false) {
      const element = document.querySelector(".App-main");
      element.innerHTML +=
        "<div class='alert-message'>Something went wrong! Check back later...</div>";
    }
    if (productsQuery.ok && query === "") {
      return [];
    }
    const productsJson = await productsQuery.json();
    return productsJson;
  } catch (err) {
    console.log(err);
  }
}
