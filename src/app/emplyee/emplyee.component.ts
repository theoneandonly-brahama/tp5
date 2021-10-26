import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
@Component({
  selector: 'app-emplyee',
  templateUrl: './emplyee.component.html',
  styleUrls: ['./emplyee.component.css']
})
export class EmplyeeComponent implements OnInit {

  /*listEmployes: Employe[] = [
    new Employe(1234, "Amine SALAH","Ingénieur" ),
    new Employe(5847, "Mouna MOALLA","Directeur" ),
    new Employe(5812, "Mourad SMIDA","Comptable" ),
    new Employe(9641, "Samar FENINA","Directeur" )
    ]*/

    lesemployes:Employe[] = [];


  constructor(private employeService:EmployeService) { }

  ngOnInit(): void {
    this.lesemployes = this.employeService.getEmployes();
    }
   

}
