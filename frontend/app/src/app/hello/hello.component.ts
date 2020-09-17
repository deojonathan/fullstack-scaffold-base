import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { HelloData } from '../services/models/hello';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private api: ApiService) { }

  helloData$: Observable<string>;

  ngOnInit(): void {
    this.helloData$ = this.api.getHello();
  }
}
