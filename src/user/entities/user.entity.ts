import { ApiProperty } from '@nestjs/swagger'

export class UsersResponse {
  @ApiProperty()
  title: string;
  @ApiProperty()
  nationality: string;
  @ApiProperty()
  remarks: string;
  @ApiProperty()
  occupations: string;
  @ApiProperty()
  images: string;
}

