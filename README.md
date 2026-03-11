# Product Management System

**Backend:** Node.js + Express + MongoDB (Mongoose)  
**Frontend:** EJS templates  
**Features:** Add products, view all, search by name, filter by category  
**Routes:** /products for list/search/filter, /products/new to add product  
Simple responsive UI

---

## Setup Instructions

1. Clone the repo: `git clone <repo-url>`  
2. Navigate: `cd <repo-name>`  
3. Install dependencies: `npm install`  
4. Start MongoDB server: `mongod`  
5. Run the app: `node app.js`  
6. Open in browser: `http://localhost:8080/products`

---

## Short Explanation of Approach

- **Backend:** Node.js + Express + MongoDB (Mongoose)  
- **Frontend:** EJS templates for rendering HTML  
- `/products` route handles listing, search (`?search=`), filter (`?category=`), and combined search+filter  
- `/products/new` route shows form to add product  
- **UI:** Simple design with container, product cards, and buttons
