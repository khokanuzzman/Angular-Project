import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-random-prj',
  templateUrl: './random-prj.component.html',
  styleUrls: ['./random-prj.component.css']

})
export class RandomPrjComponent implements OnInit {

  constructor() { }

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

}
