import { Module } from "@nestjs/common";
import { CsvService } from "./csv.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // url: process.env.DATABASE_URL,
      type: "mysql",
      host: process.env.DATABASE_HOST || "host.docker.internal",
      port: 3306,
      username: process.env.DATABASE_USER || "root",
      password: process.env.DATABASE_PASSWORD || "",
      database: process.env.DATABASE_NAME || "pizza_tracker",
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
  ],
  providers: [CsvService],
  exports: [CsvService],
})
export class DBModule {}
