import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  postData: any;
  message: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSecond: number = 2;

  constructor(
    private _boardService: BoardService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.postData = {};
    this.message = '';
  }

  ngOnInit(): void {
    this._boardService.listPost().subscribe(
      (res)=>{
        console.log(res);
        this.postData = res.post;
      },
      (err) => {
        console.log(err);
        this.message = err.error;
        this.openSnackBarError();        
      }
    );
  }

  updatePost(post: any, status: string){
    let tempStatus = post.status;
    post.status = status;
    this._boardService.updatePost(post).subscribe(
      (res) => {
        console.log(res);
        post.status = status;
        this.message = 'Post update';
        this.openSnackBarSuccesfull();
      },
      (err) => {
        post.status = tempStatus;
        this.message = err.error;
        this.openSnackBarError();      
      }
    );
  }

  deletePost(post: any){
    this._boardService.deletePost(post).subscribe(
      (res) => {
        let index = this.postData.indexOf(post);
        if(index > -1){
          this.postData.splice(index, 1);
          this.message = res.message;
          this.openSnackBarSuccesfull();
        }
      },
      (err) => {
        this.message = err.error;
        this.openSnackBarError();
      }
    );
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSecond * 1000,
      panelClass: ['style-snackBarTrue'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSecond * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }

}
