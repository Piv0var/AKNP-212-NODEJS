import { log } from "node:console";
import http from "node:http";
import url from "node:url";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import querystring from "querystring";

const PORT = 3000;
const mimeTypes = {
  '.css': "text/css",
  '.js': "text/javascript",
  '.png': "image/png",
  '.jpeg': "image/jpeg",
  '.jpg': "image/jpg",
};

const getStaticFile = (res, filePath, ext) => {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile(path.join(".", "public", filePath), (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end();
    } else {
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  switch (parsedUrl.pathname) {
    case '/':
      res.write(
        fs.readFileSync(
          path.join(import.meta.dirname, "public", "pages", "index.html")
        )
      );
      res.end();
      break;

    case "/contacts":
      res.write(
        fs.readFileSync(
          path.join(import.meta.dirname, "public", "pages", "contacts.html")
        )
      );
      res.end();
      break;

    case "/login":
      if (req.method === 'GET') {
        // Повертаємо сторінку з формою логіну
        res.write(
          fs.readFileSync(
            path.join(import.meta.dirname, "public", "pages", "login.html")
          )
        );
        res.end();
      } else if (req.method === 'POST') {
        // Обробляємо POST запит з форми
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });

        req.on('end', () => {
          const postData = querystring.parse(body);
          log(`Username: ${postData.username}, Password: ${postData.password}`);

          // Відповідаємо користувачу
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write('<h1>Авторизація виконана успішно</h1>');
          res.end();
        });
      }
      break;

    default:
      const ext = path.extname(parsedUrl.pathname);
      if (ext in mimeTypes) {
        getStaticFile(res, parsedUrl.pathname, ext);
      } else {
        res.statusCode = 404;
        res.end();
      }
      break;
  }
});

server.listen(PORT, () => {
  log(`Server started on port ${PORT}`);
});
