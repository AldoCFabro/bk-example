import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Hello everyone!');
});

try {
  app.listen(port, () => {
    console.log(`Conexa server running on the port ${port}`);
  });
} catch (error) {
  console.log(error);
}
