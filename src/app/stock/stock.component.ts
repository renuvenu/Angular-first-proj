import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, debounceTime, distinctUntilChanged, interval, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  stockForm = this.fb.group({
    name: ['']
  })
  constructor(private fb: FormBuilder,private http: HttpClient){}
  stockPrice = ''

  ngOnInit() {
    this.stockForm.get('name')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val) => 
        timer(0, 10000).pipe(switchMap((n) => this.stock(val as string)
        ))
      )
    )
    .subscribe((val: any) => this.stockPrice = val['Global Quote']['05. price'])
  }

  stock(name: string) {
    console.log(name);
    
    return this.http.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=J5ZGKNBWN18YMJKA`)
  }
}
