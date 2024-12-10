const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:5173',
//   }));

app.use(cors({
    origin: '*'
  }));

let youtube =
    [
        {id:1, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-8.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%201%20(1).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:2, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-9.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(2).png", para:'Infinix Note 12                AMOLED Helio G88 SoC!   '},
        {id:3, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-10.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(3).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:4, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-11.png", elii:"", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:5, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-4.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:6, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-5.png", elii:"", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:7, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-6.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(5).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:8, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-7.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(6).png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:9, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail.png",   elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:10, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-1.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:11, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-2.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
        {id:12, tbh:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Thumbnail-3.png", elii:"https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204-1.png", para:'Bulbuli | Coke Studio Bangla | Season One | RituRaj X Nandita'},
      ];

      const top = [
        { id: 1, title: 'All' },
        { id: 2, title: 'Cook Studio' },
        { id: 3, title: 'UX' },
        { id: 4, title: 'Case Study' },
        { id: 5, title: 'Music' },
        { id: 6, title: 'Bnagla Lofi' },
        { id: 7, title: 'Tour' },
        { id: 8, title: 'Saintmartin' },
        { id: 9, title: 'Tech' },
        { id: 10, title: 'iPhone 13' },
        { id: 11, title: 'User Interface Design' },
        { id: 12, title: "Computer.." }
    ]


      app.get("/youtube", (req, res) => {
        res.json(youtube);
      });

      app.get("/top", (req, res) => {
        res.json(top);
      });

      const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});