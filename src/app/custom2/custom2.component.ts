import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-custom2',
  templateUrl: './custom2.component.html',
  styleUrls: ['./custom2.component.scss']
})

export class Custom2Component {

  items: FirebaseListObservable<any>;
  cash: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
    this.cash = db.list('/cash');
  }
  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
    this.cash.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }

}
