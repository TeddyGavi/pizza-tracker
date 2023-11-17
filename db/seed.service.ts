import { Injectable, OnModuleInit } from "@nestjs/common";
import { CsvService } from "./csv.service";

@Injectable()
export class SeederService implements OnModuleInit {
  private readonly filePath = "./db/data.csv";
  constructor(private readonly CsvService: CsvService) {}

  async onModuleInit() {
    console.log("reading the csv file");
    console.log(await this.CsvService.readCSV(this.filePath));
  }
}
