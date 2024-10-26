export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your IIT Dharwad email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your IIT Dharwad email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "shop1", label: "shop1" },
      { id: "shop2", label: "shop2" },
      { id: "shop3", label: "shop3" },
      { id: "shop4", label: "shop4" },
      { id: "shop5", label: "shop5" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "Food", label: "Food" },
      { id: "Stationary", label: "Stationary" },
      { id: "Gadgets", label: "Gadgets" },
      { id: "Merch", label: "Merch" },
      { id: "Sports", label: "Sports" },
      { id: "Notes", label: "Notes" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "shop1",
    label: "shop1",
    path: "/shop/listing",
  },
  {
    id: "shop2",
    label: "shop2",
    path: "/shop/listing",
  },
  {
    id: "shop3",
    label: "shop3",
    path: "/shop/listing",
  },
  {
    id: "shop4",
    label: "shop4",
    path: "/shop/listing",
  },
  {
    id: "shop5",
    label: "shop5",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  shop1: "shop1",
  shop2: "shop2",
  shop3: "shop3",
  shop4: "shop4",
  shop5: "shop5",
};

export const brandOptionsMap = {
  Food: "Food",
  Stationary: "Stationary",
  Gadgets: "Gadgets",
  Merch: "Merch",
  Sports: "Sports",
  "Notes": "Notes",
};

export const filterOptions = {
  category: [
    { id: "shop1", label: "shop1" },
    { id: "shop2", label: "shop2" },
    { id: "shop3", label: "shop3" },
    { id: "shop4", label: "shop4" },
    { id: "shop5", label: "shop5" },
  ],
  brand: [
    { id: "Food", label: "Food" },
    { id: "Stationary", label: "Stationary" },
    { id: "Gadgets", label: "Gadgets" },
    { id: "Merch", label: "Merch" },
    { id: "Sports", label: "Sports" },
    { id: "Notes", label: "Notes" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
