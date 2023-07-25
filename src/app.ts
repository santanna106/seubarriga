import express, {Application} from 'express';
import router from './routes';
import userRouter from './routes/users';

const app:Application = express();

app.use(express.json())
app.use("/", router)
app.use("/users", userRouter)

export { app };
