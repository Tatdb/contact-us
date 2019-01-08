import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmissionService } from '../submission.service';
import { Messages } from '../class/messages';
import { AlertsService } from 'angular-alert-module';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  submitted = false;
  success = false;
  messageForm: FormGroup;
  showModal = false;  


  constructor(private submissionService: SubmissionService, private formBuilder: FormBuilder, private alerts: AlertsService) 
  {
    this.messageForm = this.formBuilder.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    })
  }



  onSubmit() {
    this.submitted = true;
    if (this.messageForm.invalid){
      return;
    }

    if (this.messageForm.valid){

      let form = JSON.stringify(this.messageForm.value);

      this.submissionService.sendMessage(form)
      .subscribe
      (
        response=>
        {
          form = response;
          console.log(response.message);
  
          if (response.message === "Success"){
            this.submitted = false;
            this.messageForm.reset();          
            this.alerts.setMessage('Message Sent!', 'success');
            console.log('yes');
          }

          if (response.message !== "Success"){
            this.submitted = false;
            this.messageForm.reset();          
            this.alerts.setMessage('Please Try Again. Submission Was Unsuccessful.', 'warn');
            console.log('yes');
          }
        }
      )
      
    }

  }

  ngOnInit() { 
    this.alerts.setDefaults('timeout',0);
    this.alerts.setConfig('success','icon','notification_important');
    
 
  }

}
