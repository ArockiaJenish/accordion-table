import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  bookId: number = 1112;
  bookName: String = "Integral Calculas";
  bookAuthor: String = "Manikkavasagam";

  btnToggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.btnToggle=false;
    }, 5000);
  }

//status: boolean = true;
  onToggle(){
    //console.log("status = "+this.status);
    if(this.bookAuthor=="Guptha"){
      this.bookAuthor='Manikkavasagam';
      //this.status=false;
    }
    else{
      this.bookAuthor="Guptha";
      //this.status=true;
    }

  }

}
