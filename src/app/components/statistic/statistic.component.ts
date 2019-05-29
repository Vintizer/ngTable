import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-statistic",
  templateUrl: "./statistic.component.html",
  styleUrls: ["./statistic.component.css"]
})
export class StatisticComponent implements OnInit {
  @Input() public articlesLength: number;
  @Input() public commentsLength: number;
  public constructor() {}

  public ngOnInit(): void {}
}
