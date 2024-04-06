import { Router } from "express";
import SelectionController from "./app/controllers/SelectionController.js";

const routes = Router();

//routes
routes.get('/selections', SelectionController.index);
routes.get('/selections/:id', SelectionController.show);
routes.post("/selections", SelectionController.store);
routes.put('/selections/:id', SelectionController.update);
routes.delete('/selections/:id', SelectionController.delete);

export default routes;