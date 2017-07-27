import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-custom2',
  templateUrl: './custom2.component.html',
  styleUrls: ['./custom2.component.scss']
})

export class Custom2Component {

  items: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }

}
