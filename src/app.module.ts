import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PizzasModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
