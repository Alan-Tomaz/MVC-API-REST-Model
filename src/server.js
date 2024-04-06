import app from "./app.js";

const PORT = process.env.PORT || 3000;

// listen to port 3000
app.listen(PORT, () => {
    console.log(`Server is Running in the Port ${PORT}`);
});
