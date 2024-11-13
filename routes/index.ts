import { Router } from "express";
import { Request, Response } from "express";
import database from "../database";

const indexRoute: Router = Router();

indexRoute.get("/", async (req: Request, res: Response) => {
    const products = await database.from('produtos').select("*");
    res.json({
        products: products.data
    })
})

indexRoute.post("/", async (req: Request, res: Response) => {
    const { nome, preco } = req.body;

    const products = await database.from('produtos').insert({nome, preco});

    res.json({
        created: true
    });
})

indexRoute.delete("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    const products = await database.from('produtos').delete().eq('id', id);

    res.json({
        deleted: true
    });
})

indexRoute.put("/:id", async (req: Request, res: Response) => {
    const { nome, preco } = req.body;
    const { id } = req.params;
    const product = await database.from('produtos').update({nome, preco}).eq('id', id);
    res.json({
        updated: true
    })
})

export default indexRoute;