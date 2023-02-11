// import fs from "fs";
// import data from "./JSquestions.json" assert { type: "json" };
// console.log(data);
// console.log(fs);


//do not use "type": "module" in package.json while using require
const fs2=require("fs");
const data=require("./JSquestions.json");
console.log(fs2);
console.log(data);