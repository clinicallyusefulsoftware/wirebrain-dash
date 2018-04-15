
import { Injectable } from '@angular/core';
import Promise from 'promise-polyfill';

/*
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuServiceProvider {

  cafe: any[] = [
    {id:'cof', name:'Coffee', description:'The classic standard, our exclusive select blend',
    img: 'assets/imgs/coffee.jpg', small: 1.50, medium: 2.50, large: 3.25},
    
    {id:'lat', name:'Latte', description: 'A blend of espresso, steam milk, and foam',
    img: 'assets/imgs/latte.jpg', small: 2.00, medium: 3.00, large: 3.75},
    
    {id:'moc', name:'Mocha', description:'Espresso, melted chocolate, and steamed milk',
    img: 'assets/imgs/mocha.jpg', small: 2.30, medium: 3.15, large: 4.00},

    {id:'esp', name:'Espresso', description:'The classic espresso',
    img: 'assets/imgs/espresso.jpg', small: 1.75, medium: 2.50, large: 3.50},

    {id:'cap', name:'Cappuccino', description: 'Espresso, steamed milk, and a layer of foam',
    img: 'assets/imgs/cappuccino.jpg', small: 1.85, medium: 2.75, large: 3.65},

    {id:'ame', name:'Americano', description:'Espresso and hot water',
    img: 'assets/imgs/americano.jpg', small: 1.60, medium: 2.50, large: 3.45},

    {id:'mac', name:'Macchiato', description:'Espresso topped with foamed milk',
    img: 'assets/imgs/macchiato.jpg', small: 2.10, medium: 3.05, large: 3.90  }

  ];

  constructor() {
    console.log('Hello MenuServiceProvider Provider');
  }
  getCafeDB() {
    return Promise.resolve(this.cafe);
  }

}
