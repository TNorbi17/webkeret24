import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',

  styleUrls: ['./index.component.css']
})


export class IndexComponent {
  email = 'szebydakademia@gmail.com';
  phone = '06-30-546-5498';
  address = 'Magyarország 6720 Szeged, Webkert utca. 6';
  creators = 'Tóth Norbert';
  textColor: string = '#000000';
  title = 'ezzel állítod a címnek a színét';


  

}




