import {Input, Pipe, PipeTransform} from '@angular/core';
import {hasValue} from 'object.helper';

@Pipe({
  name: 'objectSubData',
})
export class ObjectSubDataPipe implements PipeTransform {
  @Input() objectSubData: any;
  transform(value: any, field: string, defval = undefined): any {
    if (!hasValue(value) || !hasValue(field)) {
      return null;
    }
    let obj = JSON.parse(JSON.stringify(value));
    let prop = field;
    if (typeof defval === 'undefined') {
      defval = null;
    }
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
