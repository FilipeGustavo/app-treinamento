import { BaseModel } from "./base.model";

export class Product extends BaseModel {
    name: string;
    description: string;
    price: number;
    expirationDate: Date;
    category: Array<string>;
}