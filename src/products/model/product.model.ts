import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: 'products',
  createdAt: true,
  updatedAt: true
})
export class Product extends Model<Product> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true
  })
  id: number

  @Column({
    type: DataType.STRING
  })
  title: string;

  @Column({
    type: DataType.NUMBER
  })
  price: number;
}