import express from "express";
import swaggerUI from "swagger-ui-express";

import { router } from "./routes";

import swaggerDocs from "./swagger.json";

const app = express();

const port = 3000; // Default port to listen

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get("/terms", (request, response) => {
    return response.json({
        message: "Termos de Serviço",
        "data-version": "1.0.0",
        });
});

app.use("/v1", router);
app.listen(port, () => console.log(`O servidor está rodando na porta: ${port}`));