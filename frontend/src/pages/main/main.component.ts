import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  ngOnInit() {
    $(document).scroll(() => {
      if(this.isScrolledIntoView()) {
        $(".convence-fixed-button").hide();
      } else {
        $(".convence-fixed-button").show();
      }
    });
  }

  public isScrolledIntoView(): boolean {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
      var elemTop = $("#convince-button").offset().top+20;
      var elemBottom = elemTop + $("#convince-button").height();
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

}