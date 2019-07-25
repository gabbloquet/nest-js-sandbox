import { Module } from '@nestjs/common';
import { BeerController } from './controller/beer.controller';
import { BeersService } from './beers.service';

@Module({
  imports: [],
  controllers: [BeerController],
  providers: [BeersService],
})
export class BeersModule {}
