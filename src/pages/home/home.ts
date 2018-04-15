import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import 'firebase/app';
import { UserServiceProvider } from '../../providers/user-service/user-service';

//import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  menuData = [
    { title: 'Our Menu', pic: 'assets/imgs/soup1.jpg', pushPage: 'MenuPage' },
    { title: 'Account', pic: 'assets/imgs/coffee-people3.jpg', pushPage: 'AccountPage' },
    { title: 'About Us', pic: 'assets/imgs/coffee6.jpg', pushPage: 'AboutPage' },
    { title:'Locations', pic:'assets/imgs/cafe2.jpg', pushPage: 'LocationsPage'}
  ];

  logPage: any
  loggedIn: any;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth,
    private userService: UserServiceProvider){ } //private fcm:FCM) 

  ngOnInit() {
    
    this.logPage = 'LoginPage';
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = this.userService.user = user.email;
      }
    })
    //this.initFcm();
  }
  
  signOff() {
  
    this.userService.logOut();
    this.loggedIn = '';

  }

  myPagePush(page) {
    this.navCtrl.push(page)
      .then(result => { 
        if (!result)
        {
          this.userService.displayAlert('Sorry', 'You must first register an account');
        }  
      })
  }

  /* initFcm() {
    this.fcm.onNotification().subscribe(data => {
      if (data.wasTapped) {
        console.log(data);
        this.userService.displayAlert(data.title, data.content);
      }
      else {
        console.log(data);
        this.userService.displayAlert(data.title, data.content);
    }  
  })
} */

}

