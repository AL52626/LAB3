import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {TableService} from "../../../core/tableService";
import {Comment, Fixtures, Table} from "../../../mock-api/model";
import {MatTableDataSource} from "@angular/material/table";
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {Observable, Subject} from "rxjs";
import {WebcamImage} from "ngx-webcam";

@Component({
  selector: 'app-attack_test',
  templateUrl: './attack_test.component.html',
  styleUrls: ['./attack_test.component.scss']
})
export class Attack_testComponent implements OnInit {
  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  sysImage = '';
  ngOnInit() {}
  public getSnapshot(): void {
    this.trigger.next(void 0);
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

}
