import { Component } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng-Crud';
  constructor()
  {
    $( document ).ready(function() {
      $(function () {
        $('[data-toggle="popover"]').popover()
      })
  });
  }
}
