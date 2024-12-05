import express,{ Request , Response, NextFunction} from 'express';
import 'express-asyns-errors';
import {router} from './routes';
const cors = require('cors');
const path = require('path');
const http = require('http');
const app = express();
const port = 3333;
const host = '192.168.30.26'


app.use(express.json());
app.use(router);
app.use(cors());
app.use(
    'files',
    express.static(path.resolve(__dirname,'..','tmp'))
);
app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
        return res.status(500).json({
            status:"error",
            message:"internal server error..."
        })
    }
})

var server = http.createServer(app);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });

