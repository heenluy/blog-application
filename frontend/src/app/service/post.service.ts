import { Post } from './../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "/api";
  

  constructor(
    private snackbar: MatSnackBar,
    private http: HttpClient) { }

  showMessage(message: string): void {
    this.snackbar.open(message, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  criar(post: Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  obter(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  ObterUnidade(id: string): Observable<Post> {
    const url =  `${this.url} + ${id}`;
    return this.http.get<Post>(url);
  }

  atualizarArtigo(corpo: Post): Observable<Post> {
    const url =  `${this.url} + ${corpo.id}`;
    return this.http.put<Post>(url, corpo);
  }

  deletarArtigo(corpo: Post): Observable<Post> {
    const url =  `${this.url} + ${corpo.id}`;
    return this.http.delete<Post>(url);
  }

}
