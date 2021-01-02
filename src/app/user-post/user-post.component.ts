import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {UserDetailService} from '../user-detail.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  constructor(private route:ActivatedRoute, private location:Location, private userDetail:UserDetailService) { }

  id:any;
  user:any;
  userPost:any;

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("userId");
    this.userDetail.getUserById(this.id).subscribe(user=>{
      this.user=user;
    })
    this.userDetail.getUserPost(this.id).subscribe(userPost=>{
      this.userPost=userPost;
    })
  }

  goBack():void{
    this.location.back();
  }

}
