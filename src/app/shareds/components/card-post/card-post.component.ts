import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent {

  @Input() title?: string;
  @Input() body?: string;
  @Input() username?: string;
  @Input() name?: string;
  @Input() userInitials?: string;
  @Input() canDelete? = false;

  @Output() detailEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
  @Output() userRedirectEvent = new EventEmitter();

  detail() {
    this.detailEvent.emit(true);
  }

  deletePost() {
    this.deleteEvent.emit(true);
  }

  userRedirect() {
    this.userRedirectEvent.emit(true);
  }
}
