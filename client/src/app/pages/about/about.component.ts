import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeLog } from '@app/models/changelog.model';
import { StoreService } from '@app/services/store.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public changelogs: Array<ChangeLog> = [];
  public olderLogsOpen = false;

  constructor(
    private router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.storeService.getChangeLogs().subscribe(changelogs => {
      this.changelogs = changelogs;
    });
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}
