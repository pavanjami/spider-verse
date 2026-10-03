import { Component, HostListener } from '@angular/core';

@Component({selector:'app-root',standalone:true,templateUrl:'./app.component.html'})
export class AppComponent {
  cursorX=0; cursorY=0; moved=false; scrollProgress=0;
  @HostListener('document:mousemove',['$event']) onMove(event:MouseEvent){this.cursorX=event.clientX;this.cursorY=event.clientY;this.moved=true;}
  goToChapter(id:string){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
  @HostListener('window:scroll') onScroll(){
    const max=document.documentElement.scrollHeight-window.innerHeight;
    this.scrollProgress=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;
  }
  @HostListener('document:click') onClick(){document.body.classList.add('web-ping');window.setTimeout(()=>document.body.classList.remove('web-ping'),420);}
}