import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { User } from "../models/user";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {}

  // Allow getUsers() to populate the users variable, and makes them available to the view.
  getUsers(): void {
    // call this.userService.getUsers$() to populate the users variable.
    this.userService.getUsers$().subscribe(resp => {
      this.users = resp;
      console.log("this.users", this.users);
    });
  }
}
