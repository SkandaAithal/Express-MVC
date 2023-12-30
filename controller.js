const express = require("express");
const fs = require("fs");
const products = require("./model/products");
const path = require("path");
let app = express();

app.use(express.static("./public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "view/index.html"));
});
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "view/index.html"));
});
app.get("/css/navbar.css", (req, res) => {
  res.sendFile(path.join(__dirname, "css/navbar.css"));
});
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "view/products.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "view/login.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "view/contact.html"));
});
app.get("/js/app.js", (req, res) => {
  res.sendFile(path.join(__dirname, "js/app.js"));
});
app.get("/productsapi", (req, res) => {
  return res.json(products);
});
app.listen(5000, () => {
  console.log("server running in 5000");
});
