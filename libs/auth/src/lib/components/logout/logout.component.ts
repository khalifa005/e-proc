/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';


@Component({
  selector: 'e-proc-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  redirectDelay: number = 0;
  strategy: string = '';

  constructor(
    private auth: AuthService,
    private userStoreService: UserStoreService
    ){}


  ngOnInit(): void {
    this.auth.signOut();
  }

  logout(strategy: string): void {

  }


}
