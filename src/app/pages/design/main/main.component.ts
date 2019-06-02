import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private firestoreService: FireserviceService) {}
  posts: any[];
  status: String;

  //this is used for check whetheer it visible
  itVisble() {
    this.status = this.posts[0].data.status;
    if (this.status == 'true') {
      return true;
    }
  }

  //this is used for check whetheer it visible
  itInVisble() {
    this.status = this.posts[0].data.status;
    if (this.status != 'true') {
      return true;
    }
  }

  getPosts() {
    this.firestoreService.getPosts().subscribe(posts => {
      this.posts = [];
      posts.map(post => {
        this.posts.push({
          id: post.payload.doc.id,
          data: post.payload.doc.data()
        });
      });
      console.log(this.posts);
    });
  }

  deletePost(id: string, image: string) {
    console.log(image);
    console.log(id);
    this.firestoreService.deletePost(id, image);
  }

  ngOnInit() {
    this.getPosts();
  }
}
