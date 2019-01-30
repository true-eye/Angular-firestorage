import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;
  uploadState: Observable<string>;

  constructor(private afStorage: AngularFireStorage) {}

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    console.log(id);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]); 
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL()
        console.log(this.downloadURL)
      })
    ).subscribe()

  }
}
