import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultNotes= [];
    for(const notes of value){
      if(notes.data.title.indexOf(arg) > -1){
         resultNotes.push(notes);
        console.log("si");
      };
    };
    return resultNotes;
  }

}
