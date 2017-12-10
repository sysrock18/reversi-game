import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-restart',
  templateUrl: './confirm-restart.component.html',
  styleUrls: ['./confirm-restart.component.css']
})
export class ConfirmRestartComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<ConfirmRestartComponent>) { }

  ngOnInit() {
  }

}
