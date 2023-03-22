import { Component } from '@angular/core';
import { BeerService } from './beer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  beer: any = undefined;

  constructor(private BeerService: BeerService) {}

  async ngOnInit() {
    const BeerListResponse = await this.BeerService.sendRequest();

    BeerListResponse.subscribe({
      next: (result: any) => {
        this.beer = result[Math.floor(Math.random() * result.length)]
      },
      complete: () => console.log('Fetch done')
    })
  }

  async fetchNewBeer() {
    const BeerListResponse = await this.BeerService.sendRequest();

    BeerListResponse.subscribe({
      next: (result: any) => {
        this.beer = result[Math.floor(Math.random() * result.length)]
      },
      complete: () => console.log('Fetch done')
    })
  }
}
