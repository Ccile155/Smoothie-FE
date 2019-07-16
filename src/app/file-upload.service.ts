import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,  } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor( private http: HttpClient,
                private router: Router,
  ) { }

  upload(fileToUpload: any) {
    let input = new FormData();
    input.append("file", fileToUpload);
  
    return this.http.post("/api/uploadFile", input);
  }

}
