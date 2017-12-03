import { Component, OnInit, Input } from '@angular/core';
import { BikeModel } from '../../../shared/Model/Bike/bike.model';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css']
})
export class BikeInfoComponent implements OnInit {
  @Input() bike: BikeModel;

  
  
  constructor() { }

  ngOnInit() {
  }

  

}
