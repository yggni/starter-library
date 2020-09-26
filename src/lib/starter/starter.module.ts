import { Module } from '@nestjs/common';
import { StarterService } from '../..';

@Module({
  providers: [StarterService],
  exports: [StarterService],
})
export class StarterModule {}
