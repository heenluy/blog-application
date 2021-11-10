import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  post: Post = {
    id: 0,
    name: "",
    message: ""
  }

  constructor(
    private router: Router,
    private postService: PostService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate([""]);
  }

  publicar(): void {
    this.postService.criar(this.post).subscribe(() => {
      this.postService.showMessage("Publicado com sucesso!");
      this.router.navigate(["/feed"])
    })
  }
}
