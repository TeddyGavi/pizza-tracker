import { Module } from "@nestjs/common";
import { SeederService } from "./seed.service";
import { CsvService } from "./csv.service";

@Module({
  providers: [CsvService, SeederService],
  exports: [CsvService, SeederService],
})
export class DBModule {}
