import { Component } from '@angular/core';
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Services';

  constructor(private submissionservice: SubmissionService){
  }


  ngOnInit(){
  }

    


}



