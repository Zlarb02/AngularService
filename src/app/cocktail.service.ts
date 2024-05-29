import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails() {
    return [
      { name: 'Mojito', instructions: 'Combine all ingredients in a highball glass and serve with a splash of soda.' },
      { name: 'Bloody Mary', instructions: 'Combine all ingredients in a copper kettle and heat over low until steaming.' },
    ]
  }
}
