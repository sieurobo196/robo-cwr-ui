import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Language} from "../model/language";
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  type: string = '';
  url: string = '';
  listPost: Post[] = [];
  // @ts-ignore
  postDetail: Post = new Post(0, "", "", "", "");

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,
              private postService: PostService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.url = params['url'];
      console.log("rob", this.type)
      console.log("rob", this.url);
      // this.getListPostByType(this.type)
      if (this.url) {
        console.log("handle get post by id");
        this.getPostDetail(this.type, this.url);
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
      this.url = this.listPost[0].url;
      this.router.navigate(['/' + this.type + '/' + this.url]);
    });
    // this.http.get<Post[]>("/post/list?type=" + type).subscribe(data => {
    //   this.listPost = data;
    //   console.log("rob---", data);
    //   console.log("rob---", this.listPost);
    //   this.url = this.listPost[0].url;
    //   this.router.navigate(["/" + this.type + "/" + this.url]);
    // });
  }

  getPostDetail(type: string, url: string) {
    // this.http.get<Post[]>("/post/list?type=" + type).subscribe(data => {
    //   console.log("rob---", data);
    //   this.listPost = data;
    // });
    this.postService.getListPost(type).subscribe(data => {
      this.listPost = data;
      console.log('rob---no redirect', data);
    });;
    this.http.get<Post>("/post/" + type + "/" + url).subscribe(data => {
      console.log("rob---", data);
      this.postDetail = data;
    });
  }
}
