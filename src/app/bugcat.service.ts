import { Injectable } from '@angular/core';
import { BUGCATS } from './mock-bucats';

@Injectable({
  providedIn: 'root',
})
export class BugcatService {
  constructor() {}

  ngOnInit() {}

  getBugcats() {
    return BUGCATS;
  }
}
