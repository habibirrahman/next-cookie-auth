const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

<<<<<<< HEAD
  server.use(express.json());

  server.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    res.json({
      email,
      password,
      success: true,
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
=======
  server.get('*', (req, res) => {
    return handle(req, res);
  })
>>>>>>> 071f9d28e52c9d432ec2cff14f8af753763a6f07

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening on PORT ${port}`);
  });
});
