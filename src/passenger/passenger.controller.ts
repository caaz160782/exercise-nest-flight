import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('passengers')
//proteger rutas
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly passangerService: PassengerService) {}

  @Post()
  create(@Body() passengerDTO: PassengerDTO) {
    return this.passangerService.create(passengerDTO);
  }

  @Get()
  findAll() {
    return this.passangerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passangerService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() passengerDTO: PassengerDTO) {
    return this.passangerService.update(id, passengerDTO);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.passangerService.delete(id);
  }
}
