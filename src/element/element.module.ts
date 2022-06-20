import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ElementController } from './element.controller';
import { elementProviders } from './element.providers';
import { ElementService } from './element.service';

@Module({
  imports: [DatabaseModule],
  controllers:[ElementController],
  providers: [
    ...elementProviders,
    ElementService,
  ],
})
export class ElementModule {}