import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css' ] 
})
export class ServerComponent implements OnInit {
 
  togglebtn = false;
  textDisplayed = '';
  constructor() {}

  onChangeText(){
    this.textDisplayed = '';
    this.togglebtn = false;
  }
  onGetInputText(event: Event){
    this.textDisplayed = (<HTMLInputElement>event.target).value;
    if(typeof this.textDisplayed !='undefined' && this.textDisplayed){
      this.togglebtn =true;
    }
      
  }
  ngOnInit(): void {
  }

}
