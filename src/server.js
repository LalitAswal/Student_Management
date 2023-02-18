const http = require("http");
const app = require("./app");
const env = require("dotenv") ;
env.config({path:"src/config/config.env"})
const PORT = process.env.PORT || 5000
const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`server is listen at PORT ${PORT}`)
});
