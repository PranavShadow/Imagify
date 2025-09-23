
# Imagify

Imagify is an AI-powered image generation platform built with the MERN stack.
It allows users to create images from text prompts using the ClipDrop API while managing usage through a credits-based system.

- [Reference](https://youtu.be/DSGFZb8KiO8?feature=shared)

- [Deployment](https://imagify-frontend-p65c.onrender.com/)

- [Demo Video](https://drive.google.com/file/d/1T_Hv3dWHMZ-tGKOafK2p0wcCg5gAmQRN/view?usp=sharing)

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

## Lessons Learned



- Learned how to implement JWT-based authentication and protect routes with middleware.

- Gained experience with MongoDB and Mongoose for managing user data and credit balances.

- Understood how to securely call third-party APIs (ClipDrop) and handle responses like Base64 image data.

- Improved at using React Context API to manage global states such as token and creditBalance.

- Learned how to give real-time feedback with toasts, loaders, and credit checks in the frontend.

- Initially faced token issues with JWT; solved this by standardizing headers: { token } across backend and frontend.

- Sometimes credits weren’t updating correctly; fixed this by always fetching updated user data after image generation.

- Learned how to handle binary image data by converting it to Base64 and rendering as data:image/png;base64,....

- Secured routes with userAuth middleware and avoided exposing secrets by using .env.
## Frequently asked



#### How do I register and log in?
You can create an account using the `/api/user/register` endpoint and log in using `/api/user/login`. Both return a JWT token which you must pass in the headers as `{ token }` for protected routes.

#### How are credits managed?
Each user has a `creditBalance` stored in MongoDB. Every time you generate an image, one credit is deducted. You can view your balance using `/api/user/buyCredit`.

#### What happens if I run out of credits?
You will not be able to generate images. The app will automatically redirect you to the "Buy Credits" page.

#### What API is used for image generation?
Imagify integrates with the **ClipDrop Text-to-Image API**, which generates images based on your prompts.

#### How are images returned from the API?
The ClipDrop API responds with binary data. This is converted to Base64 and sent back as `data:image/png;base64,...`, so it can be directly displayed in the frontend.

#### How secure is the app?
JWT is used for authentication, middleware (`userAuth`) protects routes, and sensitive data such as MongoDB URI and API keys are stored in `.env` files.

#### Can I customize prompts freely?
Yes, but the app restricts NSFW/seductive content for safe use.
