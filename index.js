import User from "./User.js";
import chalk from "chalk";
const user = new User("Alex", 22);
console.log(chalk.red(user.toString()));


