export enum Typology {
    HOUSE,
}

export class Item {
    constructor(
        public id: string,
        public typology: Typology,
        public title: string,
        public price: number,
    ) { }
}
