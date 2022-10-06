import product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product-repository.interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {
    async create(entity: product): Promise<void> {

        await ProductModel.create({
            id: entity.id,
            name: entity.name,
            price: entity.price
        })
    }

    async update(entity: product): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async find(id: string): Promise<product> {
        throw new Error("Method not implemented.");
    }
    
    async findAll(): Promise<product[]> {
        throw new Error("Method not implemented.");
    }
    
}