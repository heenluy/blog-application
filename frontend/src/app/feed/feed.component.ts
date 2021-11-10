import { Router } from '@angular/router';
import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  posts!: Post[];

  constructor(
    private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.postService.obter().subscribe(posts => {
      this.posts = posts;
    })
  }

  pesquisar(): void {
    this.postService.showMessage("Não foi implementado ainda.");
  }

}
