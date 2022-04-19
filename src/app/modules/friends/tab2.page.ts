import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user.types';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  user: User = new User();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getMyUser().subscribe(user => {  console.log(user);});
    const props = this.describe(User);
    console.log(props);
  }
  describe(typeOfClass: any): Array<string> {
    const obj = new typeOfClass();
    const props = Object.getOwnPropertyNames(obj);
    return props;
  }
}
