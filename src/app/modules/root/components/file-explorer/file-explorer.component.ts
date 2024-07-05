import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IDocument } from 'src/app/common/types/types';
import { DriveService } from 'src/app/services/drive.service';
import { Location } from '@angular/common';

@Component({
  selector: 'diva-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss']
})
export class FileExplorerComponent implements OnInit {

  // Local attributes used to display the table correctly
  protected displayedColumns: string[] = ['name'];
  protected dataSource: Partial<IDocument[]> = [];

  // local attributes used to store latest element of the URL (folder_id || '/')
  protected latested_fodler_id: string = '';

  // (optional) local attribute used to track the nested path
  protected visited_routes: string[] = [''];

  constructor(
    private readonly driveService: DriveService,
    private readonly router: Router,
    private readonly currentRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.resetFolderIdOnRefresh();
    this.fetchDriveContent(this.latested_fodler_id);
  }

  /**
   * This function resets the folder id on refresh
   * The folder id is used to fetch the drive content
   * 
   * If the latest element of the URL is the root route, then it defaults to '0'
   * otherwise it defaults to the latest folder id
   */
  resetFolderIdOnRefresh() {
    const CURRENT_URL_STRING = this.router.url;

    if (CURRENT_URL_STRING === '/') {
      this.latested_fodler_id = '0';
      this.visited_routes = ['0'];
    } else {
      this.latested_fodler_id = CURRENT_URL_STRING.split('/').pop() || '';
      this.visited_routes = CURRENT_URL_STRING.split('/');
    }
  }


  /**
   * This function fetches the drive content where all the elements have a parent_node
   * set to passed in id
   * @param id - The id of clicked folder (aka potential parent_node for other elements)
   */
  fetchDriveContent(id: string) {
    this.driveService.GET(id)
      .then((res: any) => {
        this.dataSource = res;
        this.updateBreadcrumb(id);
        //updating url
        const newUrl = this.visited_routes.join('/');
        this.location.replaceState(newUrl);
      });
  }

  updateBreadcrumb(id: string) {
    const idIndex = this.visited_routes.indexOf(id);

    if (idIndex === -1) {
      this.visited_routes.push(id);

    } else {
      this.visited_routes = this.visited_routes.slice(0, idIndex + 1);
    }
  }
}