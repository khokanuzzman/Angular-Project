import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-random-prj',
  templateUrl: './random-prj.component.html',
  styleUrls: ['./random-prj.component.css']

})
export class RandomPrjComponent implements OnInit {
  public enabled:boolean =true;
  public disabled:boolean=false;
  public collapseIcon;
  constructor() {    
  }

  ngOnInit() {
      $( document ).ready(function() {
        $(function () {
          $('[data-toggle="tooltip"]').tooltip();
          $('[data-toggle="popover"]').popover();
          $('.exampleModalCenter').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
          });
        });
    });
  }

  public changeIcon(){
    this.enabled=false;
    this.disabled =true;
  }
  name = 'Angular 5';
  collapse:boolean =true;
  collapseOne:boolean=true;
  collapseTwo:boolean=true;
  collapseThree:boolean=true;

}
