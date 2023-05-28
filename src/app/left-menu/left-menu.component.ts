import {Component, OnInit} from '@angular/core';
import {Post} from "../model/post";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  listPost: Post[] = [];
  type: string = '';
  url: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
              private postService: PostService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.url = params['url'];
      if (this.url) {
        console.log('rob---', this.listPost);
      } else {
        this.getListPostByType(this.type);
      }

    });
  }

  getListPostByType(type: string) {
    this.postService.getListPost(type).subscribe(data => {
      this.listPost = data;
      console.log('rob---', data);
      console.log('rob---', this.listPost);
      // this.url = this.listPost[0].url;
      // this.router.navigate(['/' + this.type + '/' + this.url]);
    });
  }
}
