import { Pipe, PipeTransform } from '@angular/core';
import { AuthService }         from "src/app/services/auth.service";

@Pipe({
  name: 'typeCheckbox'
})
export class TypeCheckboxPipe implements PipeTransform {
  constructor(private auth: AuthService) {
  }

  transform(value: any, gaming: string[], home: string[], office: string[], design: string[], myConf?: boolean): any {
    if (!value) {
      return false
    }

    if (!gaming[0] && !home[0] && !office[0] && !design[0]) {
      if (myConf && this.auth.currentUser.username === value.username) {
        return value;
      }

      if (!myConf) {
        return value;
      }
    }

    if (value.type === gaming[0] || value.type === home[0] || value.type === office[0] || value.type === design[0]) {
      if (myConf && this.auth.currentUser.username === value.username) {
        return value;
      }

      if (!myConf) {
        return value;
      }
    }
  }
}
