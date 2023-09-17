import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService,private router:Router){}

  user = {
    email: '',
    password:'',
  };


  userLogin(){
    
      this.auth.checkLogin(this.user.email,this.user.password).subscribe((res:any) =>{
        if(res.status == 200){
          Swal.fire({
            icon: 'success',
            title: 'Sign Up',
            text: 'Signed Up Successfully',
          }
          )
        }else if(res.status==401){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid username/password',
          })        
        }
        this.router.navigate([res.api]);
      }
      )  
    
    
  }

}
