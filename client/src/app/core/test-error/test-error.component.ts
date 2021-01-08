import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
  baseUrl = environment.apiUrl;
  validationErrors: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  get404Error(){
    // tslint:disable-next-line: deprecation
    this.http.get(this.baseUrl + 'products/2').subscribe(response => {
      console.log(response);
    });
  }

  // tslint:disable-next-line: typedef
  get500Error(){
    // tslint:disable-next-line: deprecation
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe(response => {
      console.log(response);
    });
  }
  // tslint:disable-next-line: typedef
  get400Error(){
    // tslint:disable-next-line: deprecation
    this.http.get(this.baseUrl + 'buggy/badrequest').subscribe(response => {
      console.log(response);
    });

  }

  // tslint:disable-next-line: typedef
  get400ValidationError(){
    // tslint:disable-next-line: deprecation
    this.http.get(this.baseUrl + 'products/two').subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error.errors;
    });
  }


}
