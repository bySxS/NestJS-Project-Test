import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { RolesUsers } from "../../roles_users/model/roles_users.model";
import { User } from "../../users/model/users.model";

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs> {

  @ApiProperty({example: '1', description: 'unique id'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'ADMIN', description: 'Уникальное Значение роли '})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  value: string;

  @ApiProperty({example: 'Администратор', description: 'Описание роли'})
  @Column({type: DataType.STRING, allowNull: false})
  description: string;

  @BelongsToMany(() => User, () => RolesUsers)
  users: User[];
}