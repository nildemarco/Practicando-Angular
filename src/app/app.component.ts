import { Component } from '@angular/core';
import { UserPost } from './UserPost';

import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-json';

  posts = []

  constructor(private postsService: PostsService) {
    this.postsService.getPost().subscribe(post => {
      this.posts = post
    })
  }

}
