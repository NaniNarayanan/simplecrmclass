import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simplecrm';
  successmsg = true;
  showmsg = true;
  contacts = [
    {
      'firstname': 'Nani',
      'lastname': 'Narayanan',
      'contactid': '1804',
    },
    {
      'firstname': 'Mugi',
      'lastname': 'Mugesh',
      'contactid': '1234',
    },
    {
      'firstname': 'Amizh',
      'lastname': 'Amizhthan',
      'contactid': '5678',
    },
    {
      'firstname': 'Cathy',
      'lastname': 'Cathrien',
      'contactid': '2468',
    },
  
  ];
  category='clothing';
  category1='food';
  category2='Accessories';
  salarypa=520000;
  txtcolor='white';
  bgcolor='pink';
  borders='3px solid red';
}

