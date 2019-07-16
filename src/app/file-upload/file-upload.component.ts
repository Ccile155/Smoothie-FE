import { Component, ViewChild, Directive, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Directive({selector: 'pane'})
export class Pane {
  @Input() id !: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {
    uploadService: any;

  constructor(private http: HttpClient,
                private router: Router) {
  }
    
}

// @ViewChild("fileInput") fileInput;
export class ViewChildComp {
    @ViewChild(Pane, {static: false})
    set pane(v: Pane) {
      setTimeout(() => { this.selectedPane = v.id; }, 0);
    }
    selectedPane: string = '';
    shouldShow = true;
    toggle() { this.shouldShow = !this.shouldShow; }
  }
