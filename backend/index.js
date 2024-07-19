const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const connectToMongodb=require("./database")


app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

// CORS headers for all routes
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


connectToMongodb();

const port=2025;
app.get('/', (req, res) => {
    res.send('hello world')
  })
  app.use((req,res,next)=>{
      res.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),
      res.header(
          "Access-Control-Allow-Headers",
          "Origin,X-Requested-With,Content-Type,Accept"
  
      );
      next();
  })
app.use("/api",require("./Routes/CorddetailsInsert"));
app.use("/api",require("./Routes/checkcordcredentials"));
app.use("/api",require("./Routes/CompanyDetails"));
app.use("/api",require("./Routes/StudentDetails"));
app.use("/api",require("./Routes/Changingsheettodata"));
app.use("/api",require("./Routes/Masterstudentdatabase"));



app.listen(port,()=>{
     console.log(`Backend is running in the port ${port}`);
})
