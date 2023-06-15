import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent {
  searchForm = this.fb.group({
    searchField: ['']
  })

  countries = [{
    name: {
      common: 'India'
    }
  }]

  constructor(private fb: FormBuilder,private http: HttpClient ) {

  }

  ngOnInit() {
    this.searchForm.get('searchField')?.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((val) => this.search(val as string))
    )
    .subscribe((value: any) => {
      this.countries = value
    })
  }

  search(region: string) {
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`)
  }
}
