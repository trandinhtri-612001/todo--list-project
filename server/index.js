require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require ('mongoose')


const cors = require ('cors')
 
const ConnectDB = async ()=>{

    try {
		await mongoose.connect(`mongodb+srv://todoapp:${process.env.password}@cluster0.bhtqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				
				
			}
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log(error)

	}
}




// parse application/json
app.use(express.json())



// app.use(cors);
const UsersRouter = require('./routers/auth')
const PostsRouter = require('./routers/posts')
ConnectDB();





app.use(cors())
app.use('/api/auth',UsersRouter)
app.use('/api/post', PostsRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))