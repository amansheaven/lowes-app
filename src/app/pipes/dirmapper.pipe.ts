import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dirmapper'
})
export class DirmapperPipe implements PipeTransform {

  transform(value: string): string {
      switch(value){
        case "left": return "arrow-back-circle";
        case "right": return "arrow-forward-circle";
        case "top": return "arrow-up-circle";
        case "down": return "arrow-down-circle";
        default : return "alert-circle";
      }
  }

}
