import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PizzasModule } from "./pizzas/pizzas.module";
import { UsersModule } from "./users/users.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { join } from "path";
import { ConsumptionModule } from "./consumption/consumption.module";
import { SeederService } from "db/seed.service";
import { CsvService } from "db/csv.service";
import { DBModule } from "db/db.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [join(__dirname, "**", "*.entity.{ts,js}")],
      synchronize: false,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
    PizzasModule,
    UsersModule,
    ConsumptionModule,
    DBModule,
  ],
  controllers: [AppController],
  providers: [AppService, SeederService, CsvService],
})
export class AppModule {}
