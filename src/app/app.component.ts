import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  form : FormGroup;

  fruitOptions: Fruit[];

  subTermField: Subject<String> = new Subject<String>();

  constructor(private fb: FormBuilder, private fruitService: FruitService) { }

  ngOnInit() {
    this.form = this.fb.group({
      term: ['']
    })

    this.subTermField.pipe(debounceTime(1000)).subscribe(this.refreshData)
  }

  refreshData(value) {
      this.fruitService.searchFruits(value).subscribe( (data) => {
        this.fruitOptions = data;
      })
  }
}
