import mongoose from "mongoose";

const connectDatabase = () => {
	mongoose
		.connect(process.env.DB_CLOUD)
		.then((con) =>
			console.log(`Database running width HOST: ${con.connection.host} `),
		);
};

export default connectDatabase;
