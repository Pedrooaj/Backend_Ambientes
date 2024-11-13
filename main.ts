import app from "./app";

app.listen("3000", (error?: Error) => {
    try {
        console.log("Server rodando:","http://localhost:3000");
    } catch (error) {
        console.log(error);
    }
})