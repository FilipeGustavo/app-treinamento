import { BaseModel } from "./base.model";

export class Product extends BaseModel {
    name: string;
    description: string;
    price: number;
    expirationDate: string;
    category: string;
}