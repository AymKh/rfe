import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDocument } from 'src/app/common/types/types';
import { DriveService } from 'src/app/services/drive.service';

@Component({
  selector: 'diva-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

  // Local attributes used to display the table correctly
  protected displayedColumns: string[] = ['name'];
  protected dataSource: Partial<IDocument[]> = [];



  constructor(
    private readonly driveService: DriveService,
    private readonly router: Router,
    private readonly currentRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.fetchDriveContent('0');
  }

  fetchDriveContent(id: string) {
    this.driveService.GET(id)
      .then((res: any) => {
        this.dataSource = res;
      })
  }

}
