import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Comment} from "../../shared/comment";

/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  commentForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private viewController: ViewController, private fb: FormBuilder) {
    this.commentForm = this.fb.group({
      author: ['', Validators.required],
      rating: 5,
      comment: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentPage');
  }

  dismiss() {
    this.viewController.dismiss(null, 'cancel');
  }

  onSubmit() {
    console.log('submitting comment');
    let comment: Comment = this.commentForm.value;
    comment.date = new Date().toISOString();

    this.viewController.dismiss(comment, 'submit');
  }

}
