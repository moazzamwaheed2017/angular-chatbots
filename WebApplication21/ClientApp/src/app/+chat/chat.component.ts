import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from '../core/services/chat/chat.service';
import { Chat } from '../shared/models/chat.model';
   
@Component({
  selector: 'app-chat',
  templateUrl: 'chat.component.html',
  styleUrls: ['chat.component.css']
})
export class ChatComponent implements OnInit {
   
  user: any;
  public message: Chat;
  public messages: Chat[];

  @ViewChild('chatlist', { read: ElementRef }) chatList: ElementRef;

  @ViewChildren(ChatComponent, { read: ElementRef }) chatItems: QueryList<ChatComponent>;

  constructor(
    private chatService: ChatService,
    private router: Router
  ) {

    this.message = new Chat('', '');
    this.messages = [
      new Chat('Welcome to AI Chat Bot', '')
    ];
  }

  ngOnInit() {    
  }

  ngAfterViewInit() {
    this.chatItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  sendMessage() {

    this.messages.push(this.message);

    this.chatService.getResponse(this.message["content"]).subscribe(res => {
      console.log(res);
      this.messages.push(
        new Chat(res.result.fulfillment.speech, '')
      );
      this.scrollToBottom();
    });

    this.message = new Chat('', '');
  }

  private scrollToBottom(): void {
    try {
      this.chatList.nativeElement.scrollTop = this.chatList.nativeElement.scrollHeight;
    }
    catch (err) {
      console.log('Could not find the "ChatList" element.');
    }
  }
}
