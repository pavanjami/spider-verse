import { Component, HostListener } from '@angular/core';
@Component({selector:'app-root',standalone:true,templateUrl:'./app.component.html'})
export class AppComponent {
  cursorX=0; cursorY=0; moved=false;
  @HostListener('document:mousemove',['$event']) onMove(event:MouseEvent){this.cursorX=event.clientX;this.cursorY=event.clientY;this.moved=true;}
  @HostListener('document:click') onClick(){document.body.classList.add('web-ping');window.setTimeout(()=>document.body.classList.remove('web-ping'),420);}
}