import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { UserService } from 'src/app/shared/user-service';
import { Message } from 'src/app/message';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-send-message-modal',
  templateUrl: './send-message-modal.component.html',
  styles: []
})
export class SendMessageModalComponent implements OnInit {
  textMessage : string;
  message = new Message;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _userService : UserService, private dialog : MatDialog, private toastr : ToastrService) { }

  ngOnInit() {
   
  }

  onSend(data){

    this.message.email = data.email;
    this.message.message = this.textMessage;
    this.message.fullName = data.fullName;
    
    this._userService.sendMessage(this.message).subscribe((res:any) =>{
      if(res.succeeded){
        this.dialog.closeAll();
        this.toastr.success("Message sent","Sending is successful")
      }else{
        this.toastr.error('Error!','Message unsent.');
        }
      
    })
  }


}
