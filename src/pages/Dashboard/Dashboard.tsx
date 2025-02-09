import React, { useEffect, useState } from 'react';

const FeatureComponent: React.FC = () => {
  const hasFeatureAccess = JSON.parse(localStorage.getItem("hasFeatureAccess") || "false");
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
      const fetchedProducts = [
        { id: 1, name: 'Product 1', price: 100, category: 'Electronics' },
        { id: 2, name: 'Product 2', price: 200, category: 'Clothing' },
        { id: 3, name: 'Product 3', price: 150, category: 'Electronics' },
        { id: 4, name: 'Product 4', price: 250, category: 'Clothing' },
        { id: 5, name: 'Product 5', price: 50, category: 'Electronics' },
        { id: 6, name: 'Product 6', price: 80, category: 'Clothing' },
        { id: 7, name: 'Product 7', price: 300, category: 'Electronics' },
        { id: 8, name: 'Product 8', price: 120, category: 'Clothing' },
        { id: 9, name: 'Product 9', price: 400, category: 'Electronics' },
        { id: 10, name: 'Product 10', price: 500, category: 'Clothing' },
        { id: 11, name: 'Product 11', price: 600, category: 'Electronics' },
        { id: 12, name: 'Product 12', price: 700, category: 'Clothing' },
      ];
      setProducts(fetchedProducts);
  
  }, []);
  return (
    <>
    <div>
        <div>Welcome to Dashbaord</div>
      {hasFeatureAccess ? (
        <div>
          <h2>Exclusive Feature</h2>
          <p>You have access to this feature because of your role.</p>
          <ul>
        {products.map((product:any) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            
          </li>
        ))}
      </ul>
        </div>
      ) : (
        <p>You do not have access to this feature.</p>
      )}
      
    </div>
     <div>
     <button onClick={() => {
       localStorage.removeItem("authToken");
       window.location.href = "/";
     }}>
       Logout
     </button>
   </div>
   </>
  );
};

export default FeatureComponent;
