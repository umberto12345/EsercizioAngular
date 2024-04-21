import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shareds/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userForm = this.formBuilder.group({
    name: [''],
    username: [''],
    email: [''],
    street: [''],
    suite: [''],
    city: [''],
    zipcode: [''],
    phone: [''],
    website: [''],
    companyName: [''],
    catchPhrase: [''],
    bs: ['']
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let user: User = this.route.snapshot.data['user'];
    if (user) {
      this.userForm.patchValue(user);
      this.userForm.get('street')?.setValue(user.address.street);
      this.userForm.get('city')?.setValue(user.address.city);
      this.userForm.get('zipcode')?.setValue(user.address.zipcode);
      this.userForm.disable();
    }
  }

}
