import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { BeersModule } from '../../src/beers/beers.module';
import { BeersService } from '../../src/beers/beers.service';

describe('Beers', () => {
  const beersService = { findAll: () => [{id: 1, label: 'test'}] };

  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [BeersModule],
    })
      .overrideProvider(BeersService)
      .useValue(beersService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET beers`, () => {
    return request(app.getHttpServer())
      .get('/api/v1/beers')
      .expect(200)
      .expect(beersService.findAll());
  });

  afterAll(async () => {
    await app.close();
  });
});