// 1 - iniciando projeto
//console.log("express + TS!");

// 2 - init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

// 11 - middleware para todas rotas
// function showPath(req: Request, res: Response, next: NextFunction) {
//     console.log(req.path);
//     next();
// }

// app.use(showPath());

// 3 - rotas com post
app.use(express.json());

app.get("/", (_req, res) => {
    return res.send("Hello Express!");
});

// 3 - rotas com post
app.post("/api/product", (req, res) => {
    console.log(req.body);

    return res.send("Produto adicionado!");
});

// 4 - rotas para todos os verbos
app.all("/api/product/check", (req, res) => {
    //req.method = verbo HTTP

    if (req.method === "POST") {
        return res.send("Inseriu algum registro");
    } else if (req.method === "GET") {
        return res.send("Leu algum registro");
    } else {
        return res.send("Não podemos realizar esta operação!");
    }
});

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Ultilizando as interfaces");
});

// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
        sizes: ["P", "M", "G"],
    });
});

// 7 - router parameter
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params);

    const id = req.params.id;

    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 10,
        };

        return res.json(product);
    } else {
        return res.send("Produto não encontrado!");
    }
});

app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params);

    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 9 - rotas handlers
app.get("/api/user/:id", getUser);

function getUser(req: Request, res: Response) {
    console.log("Resgatando o usuario com id: " + req.params.id);
    return res.send("Usuario encontrado");
}

// 10 - middlewares
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
        console.log("Pode seguir!");
        next();
    } else {
        console.log("Acesso restrito!");
    }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
    return res.json({ msg: "Bem vindo a area administrativa" });
});

// 12 - req e res com generics
app.get(
    "/api/user/:id/details/:name",
    (
        req: Request<{ id: string; name: string }>,
        res: Response<{ status: boolean }>
    ) => {
        console.log(`ID: ${req.params.id}`);
        console.log(`Name: ${req.params.name}`);

        return res.json({ status: true });
    }
);

// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        // a nossa logica
        throw new Error("Algo deu errado!");
    } catch (e: any) {
        res.status(500).json({ msg: e.message });
    }
});

app.listen(3000, () => console.log("Aplicação de ts + express funcionando"));
