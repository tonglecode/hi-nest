import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getMovie(@Param('id') id: string): string {
    return `This will return the one movie ${id}`;
  }
}
