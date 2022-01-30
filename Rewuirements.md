# Create an E-Commerce API MVP using ExpressJS.

## Packages Required:
- [x] express
- [x] mongoose
- [ ] cors
- [x] bcrypt
- [x] jsonwebtoken
- [x] nodemon

---

## Features Required:

- [ ] User registration
- [ ] User authentication
- [ ] Set user as admin (Admin only)
- [ ] Retrieve all active products
- [ ] Retrieve single product
- [ ] Create Product (Admin only)
- [ ] Update Product information (Admin only)
- [ ] Archive Product (Admin only)
- [ ] Non-admin User checkout (Create Order)
- [ ] Retrieve authenticated user’s orders
- [ ] Retrieve all orders (Admin only)

---

## Stretch Requirements:

Activate Product (Admin Only)  
Display Products Per Order (User Only)

---

## Data Model Requirements

### User
First Name (string)    
Last Name (String)  
MobileNo (String)  
Email (string)  
Password (string)  
isAdmin (Boolean - defaults to false)  

---

### Product
Name (string)  
Description (string)  
Price (number)  
isActive (Boolean - defaults to true)  
createdOn (Date - defaults to current date of   creation)

---

### Order

totalAmount (number)  
purchasedOn (Date - defaults to current date of creation)  
Must be associated with:
A user who owns the order  
Products that belong to the order 