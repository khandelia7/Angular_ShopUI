import { Injectable, EventEmitter } from '@angular/core';

Injectable()
export class CommunicationService {

    id: number;

    constructor() {
    }

    categorySender(id: number): void{
        this.id = id;
    }

    productReceiver(){
        return this.id;
    }

    subCategorySender(id: number):void{
        this.id =id;
    }

    subProductReceiver(){
        return this.id;
    }


}