import express from "express";
import cors from "cors";
import indexRoute from "./routes";

class App{
    public app: express.Application;
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }

    public routes(){
        this.app.use("/", indexRoute);
        
    }

    public middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }
}

export default new App().app;