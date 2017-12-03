import { Component, OnInit, Input,
  // Component Events
  OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { BikeModel } from '../../../shared/Model/Bike/bike.model';
import { $ } from 'protractor';

@Component({
  selector: 'app-bike-list-item',
  templateUrl: './bike-list-item.component.html',
  styleUrls: ['./bike-list-item.component.css']
})

export class BikeListItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() bike: BikeModel;

  constructor() {
    console.log('constructor: BikeListItemComponent');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ' + changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: BikeListItemComponent');
  }

  onUpdateBike(Bike: BikeModel) {
    this.bike = Bike;
  }

  ngOnInit() {
  }

}
