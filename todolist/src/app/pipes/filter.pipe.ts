import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const resultNotes= [];
    for(const notes of value){
      if (notes.data.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
             resultNotes.push(notes);
      };
    };
    return resultNotes;
  }

}
