import { IDRef } from "./types";

export class Product {
  productId!: IDRef;
  sku!: string;
  category!: string;
  name!: string;
  brand!: string;
  variant!: string;
  quantity!: number;
  price!: number;
  currency!: string;
  imageUri!: string;
  uri!: string;
}