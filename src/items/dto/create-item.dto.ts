import { Typology } from "../entities/item.entity";

export class CreateItemDto {
    public typology: Typology;
    public title: string;
    public price: number;
}
