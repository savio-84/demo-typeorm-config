import { DataSource } from 'typeorm';

const connectionSource = new DataSource({
    type: "postgres",
    host: `${process.env.DB_HOST}`,
    port: Number(process.env.DB_PORT),
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `postgres`,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/**/entities/*{.ts,.js}'],
    migrations: ['src/database/migrations/**/*{.ts,.js}'],
})

connectionSource.initialize()
    .then(async (connection) => {
        connection.runMigrations().then(() => console.log("migrations updated!"));
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export { connectionSource }