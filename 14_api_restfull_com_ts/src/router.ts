import { Router, Request, Response } from "express";
import {
    createMovie,
    findMovieById,
    getAllMovies,
    removeMovie,
    updateMovie,
} from "./controllers/movieControlers";

// Validations
import { validate } from "./middlewares/handleValidate";
import { movieCreateValidation } from "./middlewares/movieValidator";

const router = Router();

export default router
    .get("/test", (req: Request, res: Response) => {
        res.status(200).send("API Working");
    })
    .post("/movie", movieCreateValidation(), validate, createMovie)
    .get("/movie/:id", findMovieById)
    .get("/movie", getAllMovies)
    .delete("/movie/:id", removeMovie)
    .patch("/movie/:id", movieCreateValidation(), validate, updateMovie);
