import {log} from "node:console";
import path from "node:path";
const __dirname = import.meta.dirname;
const __filename = import.meta.filename;
log(path.sep);
log(path.join("\\users", "\\logs", ".log.txt"))
log(path.parse(__filename));
log(path.extname(path.join(__dirname, "db.json")));
log(path.isAbsolute("users" + path.sep + "logs"));
log(path.isAbsolute(__dirname));
log(path.dirname("desktop" + path.sep + "users" + path.sep + "logs"));
log(path.resolve(__dirname,".//users", "logs"))


