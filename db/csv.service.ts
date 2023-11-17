import * as fs from "fs";
import * as csv from "csv-parser";
import { Injectable, Injectable } from "@nestjs/common";

@Injectable()
export class CVS {
  async readCSV(filePath: string): Promise<any[]> {
    const results = [];

    return new Promise((res, rej) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => res(results))
        .on("error", (error) => rej(error));
    });
  }
}
