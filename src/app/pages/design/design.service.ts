import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { advanceActivatedRoute } from '@angular/router/src/router_state';
import { DragAndDrop } from '@syncfusion/ej2-schedule';
import { storage } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  constructor(
    private firestore: AngularFirestore,
    
    private storage: AngularFireStorage,
    private router: Router
  ) {}

  downloadURL: Observable<string>;

  public getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  public deletePost(docID: string, image: string) {
    const storageRef = this.storage.storage.ref();
    storageRef
      .child(image)
      .delete()
      .then(() => {
        console.log('image delete');
      })
      .catch(err => {
        console.log(err);
      });

    this.firestore
      .collection('posts')
      .doc(docID)
      .delete()
      .then(() => {
        console.log('post deleted');
      })
      .catch(err => {
        console.log(err);
      });
  }

  createPost(postData: FormData, file: any[]) {
    alert('this is the create post');
    const image = file[0];
    const filepath = Date.now() + '-' + file[0]['name'];
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, image);
    task.snapshotChanges().pipe(
      finalize(() => {
        console.log('file is being prossed, you will be direct');
        fileRef.getDownloadURL().subscribe(url => {
          this.downloadURL = url;

          let newpost = {
            title: postData['title'],
            content: postData['content'],
            cover: this.downloadURL,
            fileRef: filepath
          };

          var aa = {
            name: 'ruwan',
            age: 22
          };

          this.firestore
            .collection('posts')
            .doc('ff')
            .set(aa);
        });
      })
    ).subscribe;
  }

  ddd() {

    var storageRef = this.storage.storage.ref("fdfdfd");
    

    // const fileRef = this.storage.ref(filepath);
    // const task = this.storage.upload(filepath, image);

    var aa = {
      name: 'ruwan',
      age: 22
    };

    return from(this.firestore.collection('posts').add(aa));
  }
}
