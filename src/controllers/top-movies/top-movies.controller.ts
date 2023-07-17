import { Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { TopMoviesService } from 'src/services/top-movies/top-movies.service';

@Controller('top-movies')
export class TopMoviesController {
  constructor(private readonly topMoviesService: TopMoviesService) {}

  @Get(':id')
  getMovie(@Param('id', ParseIntPipe) id: number) {
    return this.topMoviesService.getMovie(id);
  }

  @Post(':id/like')
  likeMovie(@Param('id', ParseIntPipe) id: number) {
    return this.topMoviesService.likeMovie(id);
  }
}
