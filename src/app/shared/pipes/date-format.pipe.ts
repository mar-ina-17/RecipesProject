import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: string): any {
    let d = new Date(date);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  }
}
