import NaryTree, { Nodo } from "../utils/NaryTree";


const menuTree = new NaryTree({ title: "Main Menu", link: "/", component: "Home" });

const root = menuTree.getRoot();


const products = new Nodo({ title: "Products", link: "/products" });
const about = new Nodo({ title: "About Us", link: "/about" });
const contact = new Nodo({ title: "Contact", link: "/contact" });


root.addChild(products);
root.addChild(about);
root.addChild(contact);


const laptops = new Nodo({ title: "Laptops", link: "/products/laptops" });
const phones = new Nodo({ title: "Phones", link: "/products/phones" });
const accessories = new Nodo({ title: "Accessories", link: "/products/accessories" });

products.addChild(laptops);
products.addChild(phones);
products.addChild(accessories);

export default menuTree;
