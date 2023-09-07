/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'e-proc-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  files: any[] = [];

  form = new FormGroup({
    files: new FormControl(),
});

  constructor() { }

  ngOnInit() {
  }
  onFileChnaged(files:any)
  {
    this.files = files;
  }
}
