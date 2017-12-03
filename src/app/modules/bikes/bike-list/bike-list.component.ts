import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BikeModel } from '../../../shared/Model/Bike/bike.model';
// import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  @Output() bikeSelectedEvent = new EventEmitter<BikeModel>();
  bikes: BikeModel[];
  selectedBike: BikeModel;

  // @HostListener('onClick') onClick(args?: string[]) {
  // }

  constructor() {
  };

  // private addBike(id: number, name: string, company: string, imageUrl: string, model: string )  {
  //   const newBike = new BikeModel();
  //   newBike.id = id;
  //   newBike.name = name;
  //   newBike.company = company;
  //   newBike.imagePath = imageUrl;
  //   this.bikes.push(newBike);
  // }

  onSelectBikeItem(bike: BikeModel): void {
    this.selectedBike = bike;
    this.bikeSelectedEvent.emit(bike);
  }

  ngOnInit() {
    const bikeImgPath = './assets/images/bikes/';

    this.bikes = [
      new BikeModel(1, 'Capra', 'YT Industries',
        [bikeImgPath + 'capra1.jpg', bikeImgPath + 'capra2.jpg', bikeImgPath + 'capra3.jpg'], 'CF', 'Best enduro bike'),
      new BikeModel(1, 'Jeffsy', 'YT Industries',
        [bikeImgPath + 'jeffsy1.jpg', bikeImgPath + 'jeffsy2.jpg', bikeImgPath + 'jeffsy3.jpg'], 'CF', 'Best trail bike'),
      new BikeModel(1, 'Nomad', 'Santa Cruz',
        [bikeImgPath + 'santa_cruz_nomad1.jpg', bikeImgPath + 'santa_cruz_nomad2.jpg', bikeImgPath + 'santa_cruz_nomad3.jpg'],
        'Carbon', 'Expensive bike'),
    ];
  }

}
