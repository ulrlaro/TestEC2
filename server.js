import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const series = ["Stranger Things", "Wednesday", "The Legend of Vox Machina", "Money Heist", "The Last of Us"];

app.get("/serie", (req, res) => {
  const index = Math.floor(Math.random() * Math.floor(5));
  console.log(index);
  const votreSerie = series[index];
  res.send(votreSerie);
});

app.listen(3001, () => {
    console.log("Le projet est en marche.")
});