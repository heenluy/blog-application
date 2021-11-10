import { Post } from './../model/post.model';
import { PostService } from './../service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post!: Post;

  constructor(
    private router: Router,
    private postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.postService.ObterUnidade(id).subscribe(post => {
      this.post = post;
    })
  }

  cancel(): void {
    this.router.navigate(["/feed"]);
  }

  atualizar(): void {
    this.postService.atualizarArtigo(this.post).subscribe(() => {
      this.postService.showMessage("Atualizado com sucesso!");
      this.cancel();
    })
  }

  // Vou deixar propositalmente no mesmo 'caminho' de 'atualizar'.
  deletar(): void {
    this.postService.deletarArtigo(this.post).subscribe(() => {
      this.postService.showMessage("Deletado com sucesso!");
      this.router.navigate(["/feed"])
    })
  }

  voltar(): void {
    this.cancel()
  }

}
