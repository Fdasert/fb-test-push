const http = require("http");

const host = "localhost";
const port = 8080;


const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("My first server!");
};


const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ajaxtest-25f23-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.firestore();
const docRef = db.collection("users").doc("user_id");

docRef.get()
  .then((doc) => {
    if (doc.exists) {
      console.log("Документ найден:", doc.data());
    } else {
      console.log("Документ не найден");
    }
  })
  .catch((error) => {
    console.log("Ошибка получения документа:", error);
  });