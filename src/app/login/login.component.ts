import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
 
import { LoginService } from './login.service';
import { LocalstorageService } from '../common/localstorage/localstorage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	userlogin: any = {};
	username: any;
    user: any = {};
	password: any;
	loginForm: FormGroup;

	constructor(private router:Router, private loginService: LoginService, 			private fb: FormBuilder,
        public localstorageService: LocalstorageService) {
	}

	ngOnInit(): void {
		this.loginForm = new FormGroup({
		      	username : new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
		      	password : new FormControl('', [Validators.required])
	    });
	}

	public login(): void{
		if(this.loginForm.controls.password.valid && this.loginForm.controls.username.valid){
			this.userlogin.password = this.loginForm.controls.password.value;
			this.userlogin.username = this.loginForm.controls.username.value;
			this.user.name = this.userlogin.username.split('@')[0];
			// this.localstorageService.setUser(this.user);
			// localStorage.setItem("sessionKey", JSON.stringify("REcsdsdvsdr42326534ghcdgdvhsdtrdvcsg-433325gcfgdc"));
			// this.router.navigate(['dashboard']);
			this.loginService.login(this.userlogin)
			.subscribe(
                res => {
                    if(res.result){
                        console.log(res);
                        localStorage.setItem("token", JSON.stringify(res.token));
                        this.localstorageService.setUser(this.user);
						this.router.navigate(['dashboard']);
                    }
                },
          		err => {
          			if(err.error){
                        console.log(err);
          				this.userlogin.error = true;
						this.userlogin.errorMgs = err.error.message;
          			}
                }
            );
		} else if(!this.loginForm.controls.password.valid) {
			this.userlogin.error = true;
			this.userlogin.errorMgs = "Invalied Password";
		} else if(!this.loginForm.controls.username.valid) {
			this.userlogin.error = true;
			this.userlogin.errorMgs = "Please input valid Email";
		} else {
			this.userlogin.error = true;
			this.userlogin.errorMgs = "Invalied Fields";
		}
	}

	public clearData(): void{
		this.userlogin.error = "";
	}

}
