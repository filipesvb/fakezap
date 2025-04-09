module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send(
            `
                <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Node practice</title>
                </head>
                <body>
                    <h1>Biblioteca municipal</h1>
                </body>
                </html>
            `
        );
    });

    app.get("/livros", (req, res) => {
        res.send(
            `
                <html>
                <head>
                    <meta charset="utf-8" />
                    <title>Node practice</title>
                </head>
                <body>
                    <table border>
                        <tr>
                            <td>Id</td>
                            <td>Título</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>O senhor das moscas</td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        );
    })
}