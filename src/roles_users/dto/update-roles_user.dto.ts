import { PartialType } from '@nestjs/swagger';
import { CreateRolesUserDto } from './create-roles_user.dto';

export class UpdateRolesUserDto extends PartialType(CreateRolesUserDto) {}
