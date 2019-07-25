import { Injectable, Param } from '@nestjs/common';
import { Beer } from './entity/beer';
import beersJson from '../../static/data/beers.json';

@Injectable()
export class BeersService {
  BeerStore: Beer[] = beersJson;

  getAllBeers(): Beer[] {
    return this.BeerStore;
  }

  getBeer(i): Beer {
    return this.BeerStore[i];
  }

  add(createBeer: Beer) {
    return this.BeerStore.push(createBeer);
  }

  update(id: string, newBeer: Beer) {
    this.BeerStore[id] = newBeer;
    return newBeer;
  }

  delete(@Param('id') id: string) {
    delete this.BeerStore[id];
    return `Done !`;
  }
}
