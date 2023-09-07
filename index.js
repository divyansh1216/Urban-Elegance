const searchInput = document.getElementById("searchbar");
const productSections = document.querySelectorAll(".product");
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  productSections.forEach((productSection) => {
    const productName = productSection.querySelector("h2").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      productSection.style.display = "block"; // Display the matching product
    } else {
      productSection.style.display = "none"; // Hide the non-matching product
    }
  });
}
searchInput.addEventListener("input", filterProducts);
