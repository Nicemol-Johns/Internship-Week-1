import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router:Router,private auth:AuthService){  }

  user = {
    name: '',
    email: '',
    ph: null,
    password:'',
    confirm_pwd:''
  };

  isConfirmInvalid(): boolean {
     return this.user.password !== this.user.confirm_pwd;
  }

  userSignup(){
    //console.log(this.user)
    this.auth.postUserData(this.user).subscribe((res)=>{
      if(res.status == 200){
        Swal.fire({
          icon: 'success',
          title: 'Sign Up',
          text: 'Signed Up Successfully',
        }
        )
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })        
      }
      this.router.navigate([res.api]);
    })

  }
  
}