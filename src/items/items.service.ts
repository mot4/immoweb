import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { readFileSync, writeFileSync } from 'fs';
import { Item } from './entities/item.entity';
import { ID } from 'src/ID';

@Injectable()
export class ItemsService {

  readonly itemsPath = './src/items/items.json';

  create(createItemDto: CreateItemDto) {
    const { typology, title, price } = createItemDto;
    const newItem = new Item(ID(), typology, title, price);

    const items = this.getItems();
    items.push(newItem);
    this.setItems(items);

    return { id: newItem.id };
  }

  findAll() {
    return this.getItems();
  }

  findOne(id: string) {
    return this.getItems().find(item => item.id === id);
  }

  update(id: string, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: string) {
    this.setItems(this.getItems().filter(item => item.id !== id));
  }

  private setItems(items: Item[]) {
    writeFileSync(this.itemsPath, JSON.stringify(items));
  }

  private getItems(): Item[] {
    const data = readFileSync(this.itemsPath, 'utf8');
    return JSON.parse(data);
  }
}
