import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  [x: string]: any;
  @Input() totalCount!: number;
  @Input() pageSize!: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  onPagerChenge(){
  // tslint:disable-next-line: deprecation
  this.onPageChenged.emit(event);
  }

}
