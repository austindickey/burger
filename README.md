# Burger Web App

This is a website deployed on heroku. It shows the current list of burgers in the database, you can add more burgers, or you can eat the existing ones.

Deployed website url: https://burgervandy.herokuapp.com

---

### **NPM Dependencies**

* express
* express-handlebars
* dotenv
* mysql

---

### **Initial Setup**
If you want to set this app up locally, follow these steps:

1. Navigate to the folder in your terminal, and install all the necessary dependencies with:

```
npm i
```

2. Next open the db folder and run the `schema.sql` and `seeds.sql` files in your MySQL Workbench, or your preferred GUI application.

3. Finally, create a file named `.env`, add the following to it, replacing the values with your database login:

```js
user=your-username
password=your-database
```

---

### **How To Utilize The Burger Web App**

Run the following code in your terminal:

```
node server
```

This will initiate a website running on http://localhost:8000/