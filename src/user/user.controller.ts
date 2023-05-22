import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateUserDto } from '../DTO/user.dto';
import { UserService } from './user.service.ts';
import { User } from './user.schema';
import { removeQuotesFromKeysInArray } from '../utils/formatJson';
import { dataMock } from 'src/data';
import { NationalityService } from '../nacionalities/nationalities.service';
import { OccupationService } from '../occupations/occupation.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse, ApiOkResponse, ApiExcludeEndpoint } from '@nestjs/swagger';
import { UsersResponse } from './entities/user.entity';

export interface UserProps {
  title: string;
  remarks: string;
  occupations: string;
  images: string;
}

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly nationalityService: NationalityService,
    private readonly occupationService: OccupationService,
    ) {}

    @ApiExcludeEndpoint()
  @Post()
  async create(): Promise<User[]> {
    const cleanedJson = removeQuotesFromKeysInArray(dataMock);

    const createdUsers = await this.userService.create(cleanedJson);

    // Extrair nacionalidades únicas dos usuários
    const uniqueNationalities = Array.from(new Set(cleanedJson.map(user => user.nationality)));

     // Criar registros na tabela "nacionalities"
     for (const nationality of uniqueNationalities) {
      await this.nationalityService.create(String(nationality));
    }

    // Extrair occupations únicas dos usuários
    const uniqueOcuppations = Array.from(new Set(cleanedJson.map(user => user.occupations)));

    // Criar registros na tabela "ocupations"
    for (const occupations of uniqueOcuppations) {
      await this.occupationService.create(String(occupations));
    }

    return createdUsers;
  }

  @ApiOperation({ summary: 'get user by nationality' })
  @ApiResponse({ status: 200, description: 'Success', type: UsersResponse })
  @Get('nationality/:nationality')
  async findByNationality(@Param('nationality') nationality: string): Promise<User[]> {
    return this.userService.findByNationality(nationality);
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, type: [UsersResponse] })
  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @ApiOperation({ summary: 'get user by name' })
  @ApiResponse({ status: 200,  type: UsersResponse })
  @Get('username/:username')
  async findByUsername(@Param('username') username: string): Promise<User[]> {
    return this.userService.findByUsername(username);
  }

  @ApiOperation({ summary: 'Get users by ocuppation' })
  @ApiResponse({ status: 200, description: 'Success', type: UsersResponse })
  @Get('occupation/:occupations')
  async findByOccupation(@Param('occupations') occupations: string): Promise<User[]> {
    return this.userService.findByOccupation(occupations);
  }
}