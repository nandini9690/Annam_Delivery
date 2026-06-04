/* ==========================================================================
   EXPANDED NEON PURPLE CATALOG MOCK SEED ARRAYS
   ========================================================================== */

   window.ANNAM_SEED = {
    deliveryPeople: [
      { id: "dlv-001", name: "Aarav", email: "aarav@gmail.com" },
      { id: "dlv-002", name: "Sanya", email: "sanya@gmail.com" },
      { id: "dlv-003", name: "Rohit", email: "rohit@gmail.com" }
    ],
  
    // 10 Food Outlets containing exactly 10 distinct food dishes with imagery
    foodShops: [
      {
        id: "shop-f1",
        name: "Noodles Point",
        rating: 4.8,
        photo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60",
        tags: ["Burgers", "Student Deals"],
        items: [
          { id: "f1-i1", name: "Cheese Burst Burger", price: 90, photo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i2", name: "Veg Crispy Momos (8pcs)", price: 80, photo: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i3", name: "Spicy Peri Peri Fries", price: 70, photo: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i4", name: "Paneer Grilled Club Sandwich", price: 110, photo: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i5", name: "Loaded Cheese Nachos Grid", price: 100, photo: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i6", name: "Classic Garlic Toast Wheels", price: 85, photo: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { id: "f1-i7", name: "Chocolate Lava Cake Drop", price: 65, photo: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i8", name: "Vanilla Cold Coffee Shake", price: 75, photo: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i9", name: "Iced Mint Lemonade Fusion", price: 55, photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=60" },
          { id: "f1-i10", name: "Double Cheese Pizza Slice", price: 120, photo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f2",
        name: "Food truck",
        rating: 4.6,
        photo: "https://images.unsplash.com/photo-1631540223537-8f2d49a4ad9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D",
        tags: ["North Indian", "Heavy Meals"],
        items: [
          { id: "f2-i1", name: "Veg Momos", price: 60, photo: "https://plus.unsplash.com/premium_photo-1673769108070-580fe90b8de7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { id: "f2-i2", name: "Masala Dosa ", price: 80, photo: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYXNsYSUyMGRvc2F8ZW58MHx8MHx8fDA%3D" },
          { id: "f2-i3", name: "Veg Burger", price: 40, photo: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { id: "f2-i4", name: "Pav Bhaji", price: 70, photo: "https://images.unsplash.com/photo-1631451457509-454a498df1c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhdiUyMGJoYWppfGVufDB8fDB8fHww" },
          { id: "f2-i5", name: "Veg Noodles", price: 40, photo: "https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnJTIwbm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: "f2-i6", name: "Pizza", price: 100, photo: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpenphfGVufDB8fDB8fHww" },
          { id: "f2-i7", name: "Tea", price: 10, photo: "https://images.unsplash.com/photo-1683533698971-dcc5e19cb0f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYSUyMG9mJTIwbWlsa3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: "f2-i8", name: "Orange Mojito", price: 50, photo: "https://images.unsplash.com/photo-1709003995898-ca69b07a8ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwbW9qaXRvfGVufDB8fDB8fHww" },
          { id: "f2-i9", name: "Sweet Punjabi Malai Lassi", price: 50, photo: "https://images.unsplash.com/photo-1692620609860-be6717812f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFzc2l8ZW58MHx8MHx8fDA%3D" },
          { id: "f2-i10", name: "Sandwiches", price: 45, photo: "https://plus.unsplash.com/premium_photo-1664472757995-3260cd26e477?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
        ]
      },
      {
        id: "shop-f3",
        name: "Hydra South Junction",
        rating: 4.5,
        photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60",
        tags: ["South Indian", "Light Bites"],
        items: [
          { id: "f3-i1", name: "Crispy Masala Dosa Ingot", price: 80, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i2", name: "Steamed Rava Idli Trio", price: 50, photo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i3", name: "Fried Medu Vada Pair", price: 60, photo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i4", name: "Onion Uttapam Thick Base", price: 75, photo: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i5", name: "Sambar Vada Soup Platter", price: 65, photo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i6", name: "Tangy Tomato Rice Bowl", price: 85, photo: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i7", name: "Creamy Curd Rice Platter", price: 80, photo: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i8", name: "Ghee Podi Idli Cubes", price: 70, photo: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i9", name: "Aromatic Filter Coffee Cup", price: 30, photo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=60" },
          { id: "f3-i10", name: "Rava Kesari Halwa Scoop", price: 40, photo: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f4",
        name: "Chinese wok",
        rating: 4.4,
        photo: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&auto=format&fit=crop&q=60",
        tags: ["Chinese", "Pan-Asian"],
        items: [
          { id: "f4-i1", name: "Hakka Noodles Wok Mesh", price: 110, photo: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i2", name: "Schezwan Fried Rice Base", price: 120, photo: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i3", name: "Manchurian Gravy Hot Pot", price: 130, photo: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i4", name: "Crispy Chilli Potatoes Toss", price: 100, photo: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i5", name: "Spring Rolls Glass Tray", price: 90, photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i6", name: "Paneer Chilli dry cubes", price: 145, photo: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i7", name: "Hot & Sour Soup Tureen", price: 70, photo: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i8", name: "Sweet Corn Cream Bowl", price: 70, photo: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i9", name: "Fried Honey Noodles Twist", price: 80, photo: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i10", name: "Spicy Schezwan Dip Flask", price: 25, photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f5",
        name: "Pizza Junction",
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
        tags: ["Pizzas", "Italian"],
        items: [
          { id: "f5-i1", name: "Margherita Gold Pizza Disc", price: 160, photo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i2", name: "Garden Fresh Veggie Wheel", price: 190, photo: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i3", name: "Spicy Jalapeno Inferno Slab", price: 210, photo: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i4", name: "Double Cheese Margherita Disk", price: 220, photo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i5", name: "Stuffed Garlic Bread Planks", price: 120, photo: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i6", name: "Creamy White Pasta Bowl", price: 140, photo: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i7", name: "Arrabiata Red Sauce Tube", price: 130, photo: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i8", name: "Cheesy Calzone Pocket Pouch", price: 150, photo: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60" },
          { id: "f4-i9", name: "Tiramisu Dessert Cup Mason", price: 95, photo: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&auto=format&fit=crop&q=60" },
          { id: "f5-i10", name: "Sparkling Berry Soda Infusion", price: 60, photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f6",
        name: "Sweet Catalyst Bakery",
        rating: 4.9,
        photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60",
        tags: ["Cakes", "Desserts"],
        items: [
          { id: "f6-i1", name: "Fudge Chocolate Ganache Block", price: 70, photo: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i2", name: "Red Velvet Neon Slice", price: 80, photo: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i3", name: "Blueberry Cheesecake Brick", price: 95, photo: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i4", name: "Baked Butter Croissant Roll", price: 60, photo: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i5", name: "Choco Chip Cookie Platter", price: 40, photo: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i6", name: "Almond Brownie Square Ingot", price: 75, photo: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i7", name: "Vanilla Custard Fruit Tart", price: 65, photo: "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i8", name: "Strawberry Macroon Trio Grid", price: 90, photo: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i9", name: "Mango Milkshake Jar Vessel", price: 85, photo: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&auto=format&fit=crop&q=60" },
          { id: "f6-i10", name: "Hot Espresso Lungo Shot", price: 45, photo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f7",
        name: "Chaotic Juice Circuit",
        rating: 4.3,
        photo: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60",
        tags: ["Healthy", "Beverages"],
        items: [
          { id: "f7-i1", name: "Fresh Orange Squeeze Flask", price: 60, photo: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i2", name: "Watermelon Hydration Vial", price: 50, photo: "https://images.unsplash.com/photo-1589948184045-a1d2e2970dcd?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i3", name: "Sweet Pineapple Pulp Jar", price: 60, photo: "https://images.unsplash.com/photo-1520085611369-0fb4da07fc96?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i4", name: "Banana Protein Dense Blend", price: 70, photo: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i5", name: "Avocado Honey Green Serum", price: 110, photo: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i6", name: "Mixed Fruit Extract Basin", price: 75, photo: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i7", name: "Papaya Pulp Shake Pitcher", price: 55, photo: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i8", name: "Detox Green Apple Flask", price: 90, photo: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i9", name: "Refreshing Mint Lime Fluid", price: 40, photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=60" },
          { id: "f7-i10", name: "Roasted Almond Nut Milkshake", price: 95, photo: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f8",
        name: "Satnaam",
        rating: 4.4,
        photo: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=500&auto=format&fit=crop&q=60",
        tags: ["Wraps", "Quick Fuel"],
        items: [
          { id: "f8-i1", name: "Single Paneer Kathi Ingot", price: 70, photo: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i2", name: "Double Paneer Overload Wrap", price: 95, photo: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i3", name: "Crispy Potato Chilli Wrap", price: 60, photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i4", name: "Spiced Veggie Cheese Tube", price: 80, photo: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i5", name: "Sweet Corn Mayo Wrap Pouch", price: 75, photo: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i6", name: "Mushroom Masala Roll Cylinder", price: 90, photo: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i7", name: "Baked Samosa Crunchy Pair", price: 30, photo: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i8", name: "Fried French Fries Tray Basket", price: 65, photo: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i9", name: "Aerated Cola Can Fuel", price: 40, photo: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=60" },
          { id: "f8-i10", name: "Citrus Orange Can Beverage", price: 40, photo: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f9",
        name: "Chai Matrix Junction",
        rating: 4.6,
        photo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&auto=format&fit=crop&q=60",
        tags: ["Tea", "Snacks"],
        items: [
          { id: "f9-i1", name: "Ginger Cardamom Adrak Chai", price: 20, photo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i2", name: "Masala Chai Brew Pot", price: 25, photo: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i3", name: "Steaming Hot Filter Coffee", price: 30, photo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i4", name: "Crispy Bun Butter Slab", price: 35, photo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i5", name: "Maska Bun Honey Drizzle", price: 45, photo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i6", name: "Fried Paneer Bread Pakora", price: 30, photo: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i7", name: "Crunchy Aloo Samosa Unit", price: 15, photo: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i8", name: "Instant Maggi Noodle Cup", price: 45, photo: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i9", name: "Double Cheese Maggi Variant", price: 65, photo: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&auto=format&fit=crop&q=60" },
          { id: "f9-i10", name: "Crispy Corn Flakes Mixture Bag", price: 40, photo: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&auto=format&fit=crop&q=60" }
        ]
      },
      {
        id: "shop-f10",
        name: "Waffle Vector Terminal",
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=500&auto=format&fit=crop&q=60",
        tags: ["Sweet", "Waffels"],
        items: [
          { id: "f10-i1", name: "Belgian Chocolate Grid Block", price: 90, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i2", name: "White Chocolate Neon Slab", price: 95, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i3", name: "Dark Night Chocolate Slab", price: 100, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i4", name: "Maple Syrup Drizzled Disc", price: 80, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i5", name: "Strawberry Cream Waffle Stack", price: 110, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i6", name: "Oreo Crumb Overload Crust", price: 115, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i7", name: "Honey Banana Grid Waffle", price: 90, photo: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i8", name: "Vanilla Scoop Extra Blob", price: 30, photo: "https://images.unsplash.com/photo-1572534641461-755451de22a8?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i9", name: "Hot Fudge Fluid Ingestion", price: 25, photo: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60" },
          { id: "f10-i10", name: "Rainbow Sprinkles Scatter Bag", price: 15, photo: "https://images.unsplash.com/photo-1519869325930-281384150729?w=400&auto=format&fit=crop&q=60" }
        ]
      }
    ],
  
    // 10 Stationeries and Grocery Vault Outlets
    groceryShops: [
      {
        id: "shop-g1",
        name: "Preet Stationary",
        rating: 4.7,
        photo: "https://images.unsplash.com/photo-1704742689831-98f4eeb7d50a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Writing Tools", "Paper"],
        items: [
          { id: "g1-i1", name: "Fine Gel Pen (Black/Blue)", price: 20, photo: "https://images.unsplash.com/photo-1567855354833-ac2c4f967b0c?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { id: "g1-i2", name: "Matte Black Graphite Pencil", price: 10, photo: "https://plus.unsplash.com/premium_photo-1670958553973-58e2ef388f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2VsJTIwcGVufGVufDB8fDB8fHww" },
          { id: "g1-i3", name: "Metallic Precision Sharpener", price: 15, photo: "https://images.unsplash.com/photo-1750502178378-cedf6587c2eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcnBuZXJ8ZW58MHx8MHx8fDA%3D" },
          { id: "g1-i4", name: "Neon Tint Highlighter Set", price: 60, photo: "https://media.istockphoto.com/id/1248945566/photo/five-colorful-markers-on-a-white-background-top-view-arranged-in-a-semi-circle-with-open-caps.webp?a=1&b=1&s=612x612&w=0&k=20&c=ngp8MhBICAO8XQPT3K8KHK5kEWi2N4j8eI74woIZsh4=" },
          { id: "g1-i5", name: "A4 Long Notebook 200 Pages", price: 65, photo: "https://images.unsplash.com/photo-1651761409007-0395097c269d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QTQlMjBub3RlYm9vayUyMG9mJTIwMjAwJTIwcHFnZXN8ZW58MHx8MHx8fDA%3D" },
          { id: "g1-i6", name: "Premium Soft Dustless Eraser", price: 10, photo: "https://images.unsplash.com/photo-1667532447990-51c6704ef358?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJhc2VyfGVufDB8fDB8fHww" },
          { id: "g1-i7", name: "Clear Geometry Ruler Scale", price: 20, photo: "https://plus.unsplash.com/premium_photo-1776974164065-6996cb4f6883?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVsZXIlMjBzY2FsZSUyMG9mJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D" },
          { id: "g1-i8", name: "Sticky Notes Pad Matrix", price: 40, photo: "https://images.unsplash.com/photo-1591462391971-9ffc57b382b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0aWNreSUyMG5vdGVzfGVufDB8fDB8fHww" },
          { id: "g1-i9", name: "Steel Bound Document Clip Trio", price: 30, photo: "https://images.unsplash.com/photo-1512278753435-c834ff8a597a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGRvY3VtZW50JTIwY2xpcCUyMHRyaW98ZW58MHx8MHx8fDA%3D" },
          { id: "g1-i10", name: "Whiteboard Marker Fluid Axis", price: 35, photo: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGVib2FyZCUyMG1hcmtlcnxlbnwwfHwwfHx8MA%3D%3D" }
        ]
      },
      {
        id: "shop-g2",
        name: "Swastik Mart",
        rating: 4.5,
        photo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=60",
        tags: ["Snacks", "Supplies"],
        items: [
          { id: "g2-i1", name: "Maggi Noodles Block (Pack of 4)", price: 60, photo: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i2", name: "Salted Potato Wafers Pouch", price: 20, photo: "https://images.unsplash.com/photo-1518047601542-79f18c655718?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i3", name: "Chocolate Chip Biscuit Tube", price: 30, photo: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i4", name: "Creamy Peanut Butter Mason Jar", price: 150, photo: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i5", name: "Toasted Wheat Bread Loaf Block", price: 45, photo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i6", name: "UHT Skimmed Milk Carton Tetra", price: 70, photo: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i7", name: "Roasted Almond Power Energy Bar", price: 50, photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i8", name: "Carbonated Fruit Fusion Can", price: 35, photo: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i9", name: "Double Mint Fresh Chewing Tablet", price: 10, photo: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop&q=60" },
          { id: "g2-i10", name: "Purified Alkaline Hydration Flask", price: 20, photo: "https://images.unsplash.com/photo-1608885898957-a599fb1b4641?w=400&auto=format&fit=crop&q=60" }
        ]
      }
    ],
    orders: []
  };
  
  if (!localStorage.getItem("annamDelivery.demo.v2")) {
    localStorage.setItem("annamDelivery.demo.v2", JSON.stringify(window.ANNAM_SEED));
  }