import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';

import { increment} from '../counter.actions';
import {UserDetailService} from '../user-detail.service';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  constructor(
    private userDetail:UserDetailService,
    private  router:Router,
    private route: ActivatedRoute,
    private store: Store<{ count: any }>
    ){
    }
  users:any={};
  totalUsers:number=0;
  userTableData:any;
  startItem:number=0;
  endItem:number=19;
  maxSize:number=0;
  pageChanged(event:any){
  console.log("Page change even is called",event);
  this.userDetail.getUsersByPage(event.page).subscribe((users)=>{
    console.log("USers from pagechange event",users);
    this.users=users;
    this.userTableData=this.users['data'];
  })
  this.startItem = (event.page-1) * event.itemsPerPage;
  this.endItem = (event.page) * event.itemsPerPage;
  this.userTableData=this.users['data'].slice(this.startItem,this.endItem);
  }

  viewPost(user:any){
    this.router.navigate([`posts/${user.id}`], { relativeTo: this.route });
    this.store.dispatch(increment({user}));
  }

  ngOnInit(){
     this.userDetail.getUsers().subscribe(users=>{
       this.users=users;
       console.log("Users from server",users);
      //  this.totalUsers=this.users['data'].length;
      this.totalUsers= this.users['meta']['pagination']['total'];
      this.maxSize = this.users['meta']['pagination']['total'];
      console.log("maxSize",this.maxSize);
      this.userTableData=this.users['data'];
     });
  }



}
