import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn Angular';
  a = 12;
  b = 23;
  c = this.a + this.b;
  height: any;

  test(event: any){
    console.log(event.target.value);
    let val:string = event.target.value;
    //console.log(/^[1-9][0-9]+\.?[0-9]{0,2}$/.test(val));
    console.log(/^[0-9.]*$/.test(val));
    if(!/^[0-9.]*$/.test(val)){
      event.target.value = val.slice(0,-1);
      console.log(this.height);
    }
    // if(!/^[1-9][0-9]+\.?[0-9]{0,2}$/.test(val)){
    //   this.height = val.slice(0,-1);
    //   console.log('if block');
    //   console.log(this.height);
    // }
  }
}
