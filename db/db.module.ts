import { Module } from "@nestjs/common";
import { CsvService } from "./csv.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

console.log({
  host: process.env.DB_HOST || "host.docker.internal",
  port: +process.env.DB_PORT,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "pizza_tracker",
});
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // url: process.env.DATABASE_URL,
      type: "mysql",
      host: process.env.DB_HOST || "host.docker.internal",
      port: +process.env.DB_PORT,
      username: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_DATABASE || "pizza_tracker",
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  ],
  providers: [CsvService],
  exports: [CsvService],
})
export class DBModule {}
