import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
    type: "postgres",
    host: `${process.env.DB_HOST}`,
    port: Number(process.env.DB_PORT),
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `postgres`,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })