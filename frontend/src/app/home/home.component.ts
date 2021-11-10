import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.obter().subscribe(posts => {
      this.posts = posts;
    })
  }

}
