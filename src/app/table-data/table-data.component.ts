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
  endItem:number=5;
  pageChanged(event:any){
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
       this.totalUsers=this.users['data'].length;
       this.userTableData=this.users['data'].slice(0,5);
     });
  }



}
