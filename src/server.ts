import express,{ Request , Response, NextFunction} from 'express';
import {router} from './routes';
import 'express-async-errors';
import cors from 'cors';
const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser')
const port = 8080;
const host = '192.168.30.26'


app.use(express.urlencoded());
app.use(bodyParser.json())
app.use(router);
app.use(cors());
app.use(
    'files',
    express.static(path.resolve(__dirname,'..','tmp'))
);

app.use((err: Error, req: Request, res: Response, next:NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status:"error",
        message: "Internal server error..."
    })    
}
)

var server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });

