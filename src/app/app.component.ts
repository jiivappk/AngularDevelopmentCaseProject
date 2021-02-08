import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';

import { increment} from './counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  visitedTable:any;
  hour:any;
  min:any;
  sec:any;
  month:any;
  year:any;
  day:any;
  date:any;

  constructor(
    private store: Store<{ count: any }>,
    private router:Router,
    private route: ActivatedRoute,
    ){}
  ngOnInit(){
    this.currentTime();
    this.store.subscribe((state)=>{
      let userVisited=state.count;
      this.visitedTable=[...userVisited].sort((a:any,b:any)=>b.visitedCount-a.visitedCount).slice(0,5)
      setTimeout(()=>{
        console.log("From App Component, userVisited",userVisited);
        console.log("from app component, visited table data",this.visitedTable);
      },500)
    });
  }

  viewPost(user:any){
    this.router.navigate([`posts/${user.id}`], { relativeTo: this.route });
    this.store.dispatch(increment({user}));
  }

  nameFilter(name:any){
    console.log("Name filter method is called",name.value);
  }
  currentTime() {
    var date = new Date(); /* creating object of Date class */
    this.hour = this.updateTime(date.getHours());
    this.min = this.updateTime(date.getMinutes());
    this.sec = this.updateTime(date.getSeconds());
    this.day = date.getDate();
    this.month = date.getMonth()+1;
    this.year = date.getFullYear();
    this.date=`${this.day}/${this.month}/${this.year} ${this.hour}:${this.min}:${this.sec}`
    setTimeout(()=>{ this.currentTime() }, 1000);
  }

  updateTime(k:any) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
}
