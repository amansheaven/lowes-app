import { Component, OnInit, ViewChild, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { slideOpts } from './slideroptions';
import { Pedometer } from '@ionic-native/pedometer/ngx'
import { take, map, tap, finalize, takeWhile, takeUntil } from 'rxjs/operators';
// import { LogoMapPipe } from './mapper.pipe';

@Component({
  selector: 'dirdisplay',
  templateUrl: './dirdisplay.component.html',
  styleUrls: ['./dirdisplay.component.scss'],
  // providers:[LogoMapPipe]
})
export class DirdisplayComponent implements OnInit {
  @Input() route: {};
  @Output() change = new EventEmitter();
  constructor(private pedo : Pedometer) {
    
   }
  @ViewChild('slides',{static:false})slides: IonSlides;
  disproute;
  slideOpts = slideOpts;
  dispsteps=0;
  inde=0;

  ngOnInit(){
    this.disproute = this.route;
  }
  ionViewWillEnter(){}

  // delay(ms: number) {
  //   return new Promise( resolve => setTimeout(resolve, ms) );
  // }

  dirmapper(dir:string):string {
    switch(dir){
      case "left": return "arrow-back-circle";
      case "right": return "arrow-forward-circle";
      case "ahead": return "arrow-up-circle";
      case "back": return "arrow-down-circle";
      default : return "alert-circle";
    };
  };

  ngOnChanges(changes:SimpleChange){
    this.pedo.stopPedometerUpdates().finally(()=>console.log("Stopped Service Properly"))
    for(let propName in changes){
      this.inde = 0;
      let change = changes[propName];
      this.disproute = change.currentValue;
      console.log("Route looks like this :: ", this.disproute)
      if(change.firstChange == true){
        this.runner();
      }
      else{
        this.slides.slideTo(0);
        this.runner();
      }
    }
    // if(!changes['route'].isFirstChange()){
    //   this.runner();
    // }else{
    //   this.slideOpts.slideTo(0);
    //   this.runner();
    // }
    // console.log(changes[route].currentValue)
    // console.log(changes.currentValue)
    // this.disproute = changes.currentValue;
    // console.log(this.disproute)

  }

  countsteps(steps){
    this.dispsteps = 0;
    console.log("WORKINGG")
    this.pedo.startPedometerUpdates()
    .pipe( map(res => res.numberOfSteps), tap((res)=>console.log("res:steps:condition",res, steps, !((res > steps) && (res != 0)))),takeWhile(res => !((res > steps) && (res != 0)) ))
    .subscribe(
      (res)=> this.changedisp(res),
      (err)=>console.error(err),
      ()=>{
        console.log("done here");
        // this.pedo.stopPedometerUpdates().finally(()=>{
        //   console.log("Closed pedo")
        // });
        // this.nextcard();
        this.pedo.stopPedometerUpdates().finally(()=>{
          console.log("Stopped Service Properly")
          this.slides.slideNext();
          this.inde = this.inde+1;
          this.runner()
        })
      }
    )
    // console.log("completed observation ready to return ")
  }

  runner(){
    // console.log(this.disproute, this.disproute[0]);
    // for(let route of this.disproute){
      if(this.disproute[this.inde]){
      var route = this.disproute[this.inde];
      console.log("for route in routes", route);
      console.log("THIS MUCH STEPS TO TAKE :: ", route.len )
      this.countsteps(route.len);
      }
      // console.log(d)
    // }
  }

  changedisp(res){
    this.dispsteps = res;
    console.log("res:dispsteps", res, this.dispsteps);
    console.log("updated steps")
  }
  // nextcard(){
  //   this.slides.slideNext();
  //   this.countsteps(10);
  // }

}
