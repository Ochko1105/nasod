// export const ProductCard = ({ product, addToCart }) => {
//   /**
//    * TODO: Students need to implement:
//    * 1. Accept product as prop
//    * 2. Display product information (image, title, price, category)
//    * 3. Add to cart functionality
//    * 4. Handle product data properly
//    */

//   return (
//     <div className="product-card">
//       <div className="product-image">
//         {/* TODO: Add product image */}
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{
//             height: "250px",
//             background: "#f0f0f0",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         ></img>

//         <div className="product-actions">
//           <button className="action-btn wishlist">♥</button>
//           <button className="action-btn quick-view">👁</button>
//         </div>
//       </div>

//       <div className="product-info">
//         {/* TODO: Add product category */}
//         <span className="product-category">{product.category}</span>

//         {/* TODO: Add product title */}
//         <h3 className="product-name">{product.title}</h3>

//         <div className="product-price">
//           {/* TODO: Add product price */}
//           <span className="current-price">{product.price}</span>
//         </div>

//         {/* TODO: Add to cart functionality */}
//         <button onClick={() => addToCart(product)} className="add-to-cart-btn">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };
// export const ProductCard = ({ product, addToCart }) => {
//   return (
//     <div className="product-card">
//       <div className="product-image">
//         <img
//           src={product.image}
//           alt={product.title}
//           style={{
//             height: '250px',
//             background: '#f0f0f0',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         ></img>

//         <div className="product-actions">
//           <button className="action-btn wishlist">♥</button>
//           <button className="action-btn quick-view">👁</button>
//         </div>
//       </div>

//       <div className="product-info">
//         <span className="product-category">{product.category}</span>

//         <h3 className="product-name">{product.title}</h3>

//         <div className="product-price">
//           <span className="current-price">{product.price}</span>
//         </div>

//         <button onClick={() => addToCart(product)} className="add-to-cart-btn">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };
// import { useEffect, useState } from 'react';
// import { Header } from './components/Header';
// import { ProductCard } from './components/ProductCard';
// import useCart from './useCart';

// function App() {
//   const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products?limit=6')
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);
//   console.log({ products });
//   const totalPrice = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   if (loading) return <p>Loading product</p>;

//   return (
//     <>
//       <Header
//         cart={cart}
//         updateQuantity={updateQuantity}
//         removeFromCart={removeFromCart}
//         totalPrice={totalPrice}
//       />
//       <div className="product-list-container">
//         <div className="product-list-header">
//           <h1>Our Products</h1>
//           <p>Discover our amazing collection of products</p>
//         </div>

//         <div className="products-grid">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useEffect, useState } from 'react';
// export default function useCart() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const found = prev.find((item) => item.id === product.id);
//       if (found) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };
//   const updateQuantity = (productId, newQuantity) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === productId
//             ? { ...item, quantity: item.quantity + newQuantity }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const removeFromCart = (productId) => {
//     setCart((prev) => prev.filter((item) => item.id !== productId));
//   };
//   return {
//     cart,
//     addToCart,
//     updateQuantity,
//     removeFromCart,
//   };
// }
