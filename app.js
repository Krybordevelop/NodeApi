import express from 'express'

const app = express();
const port = 3131 

app.use(express.json)

app.get('/', (req,res)=>{
    res.json({'message': 'all done'})
})

app.listen(port, ()=>{
        console.log(`server start on port ${port}`)
})
