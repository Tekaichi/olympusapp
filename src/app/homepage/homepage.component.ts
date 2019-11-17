import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core';
import { DivisionService } from '../division.service';
import { Division } from '../shared/models/division';
import { ProcedureService } from '../procedures.service';
import { Procedure } from '../shared/models/procedures';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @ViewChild('layout', { static: true }) layout: ElementRef;


  divisions: Division[];
  procedures: Procedure[];
  energy: String;
  time: String;
  temperature: String;
  humidity: String;
  closeResult: string;

  constructor(private route: ActivatedRoute, private modalService: NgbModal, private divisionService: DivisionService, private procedureService: ProcedureService, private router: Router) {


    let date = new Date();
    if(date.getHours() <10){
      this.time  = "0"+ date.getHours();
    }else{
      this.time = date.getHours().toString();
    }
    this.time += date.getMinutes().toString();



  }

  open(content, procedure) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      if (result == "Confirm") {
        console.log(procedure.id)
        this.runProcedure(procedure.id);
      }
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  //Placeholder para dar run do procedure
  runProcedure(id: number) {

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  //Isto deveria receber um id do user, se quisermos multiplos utilizadores numa sessão.
  getDivisions(): void {
    this.divisionService.getDivisions().subscribe(
      division => {
        this.divisions = division;
      }
    );
  }
  //Isto deveria receber um id do user, se quisermos multiplos utilizadores numa sessão.
  getProcedures(): void {
    this.procedureService.getTopProcedures().subscribe(
      procedure => {
        this.procedures = procedure;
      }
    );
  }

  getInfo() {
    //info
    var info = [];

    //temperatura
    var tempValue = 0;
    var tempCount = 0;

    //humidade
    var humidityValue = 0;
    var humidityCount = 0;

    //energia
    var energy = 0;

    this.divisions.forEach(function (division) {
      division.info.forEach(function (inf) {
        if (inf.description == "Temperatura") {
          var splitted = inf.value.split("ºC", 2);
          tempValue += +splitted[0];
          tempCount++;
        }
        if (inf.description == "Humidade") {
          var splitted = inf.value.split("%", 2);
          humidityValue += +splitted[0];
          humidityCount++;
        }
        if (inf.description == "Energy") {
          var splitted = inf.value.split("W", 2);
          energy += +splitted[0];
        }
      })

    })
    info.push(tempValue / tempCount)
    info.push(humidityValue / humidityCount)
    info.push(energy)
    return info;
  }

  ngOnInit() {
    this.getDivisions();
    this.getProcedures();
    this.temperature = this.getInfo()[0].toFixed(1) + 'ºC'; //Get from somewhere
    this.humidity = this.getInfo()[1].toFixed(1) + '%'; //Get from somewhere
    this.energy = this.getInfo()[2] + 'W';
  }

  goToSettings(): void {
    this.router.navigate(['/settings']);
  }

  goToLogs(): void {
    this.router.navigate(['/logs']);
  }

  goToAnalytics(): void {
    this.router.navigate(['/analytics']);
  }

  goToProcedures(): void {
    this.router.navigate(['/procedures']);
  }

  goToDivision(id: number): void {
    this.router.navigate(['/division', id]);

  }

  ngAfterViewInit() {

    let local = this;
    this.divisions.forEach(function (division) {
      local.drawDiv(division); //Draws the divisions. 
    })

  }

  drawDiv(division: Division) {

    let from = division.layout.from;
    let to = division.layout.to;



    let parentHeight = this.layout.nativeElement.offsetHeight;

    //console.log(parentHeight);

    //Fill the screen ? 

    let scale = 0.9;
    let width = Math.abs(to.x - from.x) * scale;
    let height = Math.abs(to.y - from.y) * scale;


    from.x *= scale;
    from.y *= scale;


    //Devices
    /*let vals = "";
    division.devices.forEach(function(device){
      let name = device.name;
      let pos = device.position;
      pos.x *=scale;
      pos.y *=scale;
      //Center the device
     // pos.x -= 3;//Some width factor; 
      //pos.y -= 0.1; //Some height factor
       //<app-type [input]...></app-type>
      vals +="<span style='position:absolute;top:"+pos.y+"vw; left:"+pos.x+"vw;'>"+ name+"</span>";
    })*/



    let style = "style='position:absolute;margin:0 auto;top:" + from.y + "vw;left:" + from.x + "vw;border:1px solid black;width:" + width + "vw; height:" + height + "vw;'" //+size+"'";//position + size;
    //Insert division
    this.layout.nativeElement.insertAdjacentHTML('beforeend', " <a href='division/" + division.id + "'> <div class='division'" + style + ">" +
      "<div  style='position:relative;top: 50%;left: 50%;transform: translate(-50%, -50%);'>" + division.title + "</div>"
      + "</div> </a>  ");





  }



}
