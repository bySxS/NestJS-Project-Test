import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateProductDto } from "../../dto/create-product.dto";
import { Product as ProductEntity } from "../../model/product.model";
import { ProductsService } from "../../products.service";

@Resolver('Product')
export class ProductResolver {
  constructor (
    private readonly productService: ProductsService
  ) {}

  @Mutation(() => ProductEntity)
  async createProduct(@Args('createProduct') createProductDto: CreateProductDto): Promise<ProductEntity> {
    return await this.productService.create(createProductDto)
  }

  @Query(() => [ProductEntity])
  async getProducts(): Promise<ProductEntity[]> {
    return await this.productService.getAll()
  }

}
