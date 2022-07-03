import {Input, Pipe, PipeTransform} from '@angular/core';
import {hasValue} from 'ifslib';

@Pipe({
  name: 'objectSubData',
})
export class ObjectSubDataPipe implements PipeTransform {
  @Input() objectSubData: any;

  // tslint:disable-next-line:no-unnecessary-initializer
  transform(value: any, field: string, defval = undefined): any {
    if (!hasValue(value) || !hasValue(field)) {
      return null;
    }
    let obj = JSON.parse(JSON.stringify(value));
    let prop = field;
    if (typeof defval === 'undefined') {
      defval = null;
    }
    // @ts-ignore
    prop = prop?.split('.');
    for (let i = 0; i < prop.length; i++) {
      if (typeof obj[prop[i]] === 'undefined') {
        return defval;
      }
      obj = obj[prop[i]];
    }
    return obj;
  }

}
