const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/blog.html`);
});

app.get("/contact", (req, res) => {
    res.sendFile(`${__dirname}/blog-contact.html`);
  });
  app.get("/about", (req, res) => {
    res.sendFile(`${__dirname}/blog-about.html`);
  });
 

app.listen(5000, () => {
  console.log("server as a 5000");
});



