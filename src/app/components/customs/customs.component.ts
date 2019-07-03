import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customs',
  templateUrl: './customs.component.html',
  styleUrls: ['./customs.component.css']
})
export class CustomsComponent implements OnInit {

  public isViewable: boolean = false;


  public styleBinding =
    {
      top: "10%",
      left: "45%",
      width: "30em"

}

constructor() { }

ngOnInit() {
}


  public openModal()
{
  this.isViewable = true;
}

  public close(){
  this.isViewable = false;
}

}
