import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Language} from "../model/language";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listLanguages: Language[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getListData()
  }

  getListData() {
    console.log("rob---get lít data");
    const url = 'http://backend-service-url/api/java';
    this.http.get<Language[]>("/post/languages").subscribe(data => {
      this.listLanguages = data;
      console.log("rob---", data);
      console.log("rob---", this.listLanguages);
    });
  }
}
