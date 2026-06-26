# Imagify

![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black?logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-brightgreen?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

Imagify is an AI-powered image generation platform built developed with the help of MERN stack.
It allows users to create images from text prompts using the ClipDrop API while managing usage through a credits-based system.

- [Reference](https://youtu.be/DSGFZb8KiO8?feature=shared)

- [Demo Video](https://drive.google.com/file/d/1T_Hv3dWHMZ-tGKOafK2p0wcCg5gAmQRN/view?usp=sharing)

## Performance Metrics

- Engineered 4 RESTful APIs for end-to-end AI image generation, integrating the ClipDrop API within a MERN architecture

- Implemented credit-based system with JWT authentication and bcrypt password hashing for secure usage tracking

- Achieved 258ms average response time, 68% faster than Google’s 800ms TTFB benchmark

- Achieved 5.1s average response time for AI image generation, dependent on external ClipDrop API processing latency

## Live Demo

🔗 **View Project Here:**  

https://imagify-pranavgg.vercel.app/

## Running Tests

To run client

```bash
  npm run dev
```

To run server

```bash
  npm run server
```


## Dependicies used

Frontend 

```bash
npm install react react-dom react-router-dom react-toastify motion

```
Backend
```bash
npm install express mongoose dotenv bcrypt jsonwebtoken axios form-data cors nodemon


```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URI`

`CLIPDROP_API`

`JWT_SECRET`

## 📸 Preview
Landing Page

<img width="1898" height="908" alt="image" src="https://github.com/user-attachments/assets/11e28143-7010-4f2f-ae76-1dd194b1fe67" />
<img width="1896" height="909" alt="image" src="https://github.com/user-attachments/assets/c1947eb2-fad7-4e7a-84d5-831c93063c9b" />

