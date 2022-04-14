import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language:string="telu";
   listOfLanguages: string[] =
   ["Eng","Hindi","spanish"];

  addLanguage() {
    console.log("sdf");
    this.listOfLanguages.push(this.language);
    console.log(this.listOfLanguages);
  }

  deleteFirst(){
    this.listOfLanguages.splice(0,1);
  }
}
