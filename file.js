#! /usr/bin/env node
const {exec} = require("child_process");
const { argv, exit } = require("process");
const fs = require("fs");

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const arg = yargs(hideBin(process.argv)).argv
let a = 1
if (arg.help) {
    console.log(
    ```
    --help : shows all arguments that you can give to runit
    --version : shows version
    ```)
    a=2
  } 
  if (arg.version) {
    console.log(
    `
     Runit version 1.0.0
    `
        )
    a=2
  } 
Array.prototype.last = function () {
    return this[this.length - 1];
};
if (a==1) {
    let args = argv.slice(2)
if (args[0] === undefined || args[0]===null) {
    console.log("No arguments");
    exit(1)
}else{
    console.log(args[0]);
    if (`${args[0]}`.split(".").last() === "js") {
            fs.watchFile(args[0],{interval:1000},(a , b)=>{
                console.log(args[0]+ " " +"has changed . running it : ");
                console.log("----------------------------------------------------");
                exec(`node ${args[0]}`,(e , s , se)=>{
                    if (e) {
                        console.log(e);
                    }
                    if (s) {
                        console.log(s);
                    }
                    if (se) {
                        console.log(se);
                    }
                })
                console.log("----------------------------------------------------");
            })
        }else{
            console.log("file is not having .js extention .");
            exit(1)
        }
}
}
