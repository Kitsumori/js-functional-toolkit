import { readFile } from 'fs/promises';
import path from "node:path"
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const __rootdirname = path.join(...__dirname.split("/").slice(0, -1))
const FOLDER = path.join(__rootdirname,"data", "chapterTenLogs")

function textFile(file) {
    return new Promise(resolve => {
        readFile(file, { encoding: "utf-8"}).then(resolve);
    });
}

export async function activityTable(day) {
    const logFiles = (await textFile(path.join(FOLDER, "camera_logs.txt"))).split("\n");
    const table = new Array(24).fill(0);
    
    for (const logFile of logFiles) {
        const logLines = (await textFile(path.join(FOLDER, logFile))).split("\n");

        for (const line of logLines){
            const timestamp = new Date(Number(line));
            if (timestamp.getDay() === day) {
                table[timestamp.getHours()]++;
            }
        }
    }
    return table;
}

export function Promise_all(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) 
            {
                resolve([])
                return
            }
        const results = []
        let pending = promises.length

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then(value => {
                results[index] = value;
                pending -= 1;
                if (pending === 0) resolve(results)
            })
        .catch(reject)
        })
    })
}