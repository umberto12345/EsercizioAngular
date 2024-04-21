import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardPostModule } from 'src/app/shareds/components/card-post/card-post.module';
import { Post } from 'src/app/shareds/interfaces/post.interface';

@Component({
    selector: 'ngbd-modal-content',
    imports: [CardPostModule],
    standalone: true,
    template: `
	
    <div class="modal-body dialog-post">	
        <div class="row">
            <div class="col-12 list-post advance ">
                <app-card-post   [name]="post?.user?.name" [username]="post?.user?.username" [body]="post?.body" [title]="post?.title">
                </app-card-post>
            </div>
            
        </div>  
        <button type="button" class="btn btn-primary text-white" (click)="activeModal.close('Close click')">Chiudi</button>   
	</div>

	`,
})
export class NgbdModalContent {
    activeModal = inject(NgbActiveModal);

    @Input() post?: Post;
}
