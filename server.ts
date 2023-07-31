import App from "./src/app";

const port = 7070;

const server = App.listen(port, () => {
    console.log(`start listening on port: ${port}`);
});