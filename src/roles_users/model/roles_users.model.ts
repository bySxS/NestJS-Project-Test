import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "../../roles/model/roles.model";
import { User } from "../../users/model/users.model";

interface RolesUserCreateAttrs {
  userId: number
  rolesId: number
}

@ObjectType()
@Table({ tableName: 'roles_users', createdAt: true, updatedAt: true })
export class RolesUsers extends Model<RolesUsers, RolesUserCreateAttrs> {
  @Field(() => ID)
  @ApiProperty({ description: 'ID', example: '1' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number

  @Field()
  @ApiProperty({ description: 'Role ID', example: '1' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, field: 'role_id', allowNull: false })
  roleId: number;

  @Field()
  @ApiProperty({ description: 'User Id', example: '1' })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, field: 'user_id', allowNull: false })
  userId: number;
}