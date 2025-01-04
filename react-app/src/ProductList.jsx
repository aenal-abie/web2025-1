const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Manggo", isFruit: true, id: 3 },
  { title: "Tomatto", isFruit: true, id: 3 },
  { title: "Brocoly", isFruit: false, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map((product) => (
    <li style={{ color: product.isFruit ? "magenta" : "darkgreen" }}>
      {product.title}
    </li>
  ));

  return <ol>{listItems}</ol>;
}
