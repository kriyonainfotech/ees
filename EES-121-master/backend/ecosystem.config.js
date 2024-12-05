module.exports = {
    apps: [
        {
            name: "backend",
            script: "./index.js",
            env: {
                NODE_ENV: "production",
                PORT: 3001,
                MONGO_URI: "mongodb+srv://rajivmsurati11:rajivmsurati11@cluster0.p9hso.mongodb.net/EES-121_App",
            },
        },
    ],
};
