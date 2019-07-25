import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Beer } from '../entity/beer';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { BeersService } from '../beers.service';

@Controller('/beers')
export class BeerController {
  constructor(private readonly beersService: BeersService){};

  @Get()
  findAll(): Beer[] {
    return this.beersService.getAllBeers();
  }

  @Get(':id')
  findOne(@Param() params): Beer {
    return this.beersService.getBeer(params.id);
  }

  @Post()
  create(@Body() createBeer: Beer) {
    return this.beersService.add(createBeer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() newBeer: Beer) {
    this.beersService.update(id, newBeer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.beersService.delete(id);
  }
}