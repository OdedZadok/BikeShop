import { Component, OnInit, Output } from '@angular/core';
import { BikeModel } from '../../../shared/Model/Bike/bike.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  @Output() selectedBike: BikeModel;

  onBikeSelection(bike: BikeModel): void {
    this.selectedBike = bike;
  };

  constructor() { }

  ngOnInit() {
  }
}
