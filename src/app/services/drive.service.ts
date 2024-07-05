import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDocument } from '../common/types/types';

/**
 * This service holds everything related to the Drive API
 * including the API calls, State management, etc
 */

@Injectable({
  providedIn: 'root'
})
export class DriveService {

  /**
   * Using a test API hosted on glitch
   * PS: The API manages a json file with nested folders objects
   */
  protected API_URL = environment.base_api;

  constructor(
    private readonly http: HttpClient,
  ) { }

  /**
   * This method takes care of returning the list of folders
   * that have the parent_node set to the passed in id
   */
  public async GET(parent_node: string) {
    return this.http.get<IDocument[]>(this.API_URL)
      .pipe(
        map((documents: IDocument[]) => documents.filter((doc: IDocument) => doc.parent_node === parent_node))
      )
  }
}
