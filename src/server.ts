import { app } from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, ():void => {
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
    });