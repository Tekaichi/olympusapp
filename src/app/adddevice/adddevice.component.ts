import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Division } from '../shared/models/division';
import { Router, ActivatedRoute } from '@angular/router';
import { Device, SystemDevice } from '../shared/models/device';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DevicesService } from '../devices.service';
import { DivisionService } from '../division.service';
@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.css'],
})
export class AdddeviceComponent implements OnInit {
  @ViewChild("addeddevice",{static:true}) posDev :ElementRef;


  
  titleMessage :string;

  model = new Device();

  selectedType: SystemDevice; 
  title: String;
  width: number;
  height: number;
  devices: SystemDevice[];
  division: Division;
  closeResult: string;
  activeModal: NgbActiveModal ;
  selectedUrl : String;
  ratio : number;

  isEdit : boolean;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: NgbModal, private deviceService: DevicesService, private divisionService: DivisionService) {

  }

  open(content) {
    
    this.modalService.dismissAll();

  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
     this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

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



  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    let deviceId = this.route.snapshot.paramMap.get("deviceId");
    if(deviceId){
      this.isEdit = true;
      this.model = this.deviceService.getDevice(id,+deviceId);
      this.titleMessage = "Edit Device of"

    }else{
      this.isEdit = false;
      this.titleMessage = "Add new Device to"
    }

    this.getDivision(id);
    this.deviceService.getKnownDeviceTypes().subscribe(devices => this.devices = devices);
  }
  submitted = false;
  getDivision(id: number): void {
    this.divisionService.getDivision(id).subscribe(
      division => {
        this.division = division;


        this.title = division.title;


        const maxarea = 500; //Maximum area of the division
        //Should it be maximum height?

        this.width = Math.abs(division.layout.to.x - division.layout.from.x);
        this.height = Math.abs(division.layout.to.y - division.layout.from.y);

        let area = this.width * this.height;

      

        let ratio =  Math.sqrt(maxarea/area);
        this.ratio = ratio;
        this.width *= Math.sqrt(ratio);
        this.height *= Math.sqrt(ratio)

      }
    );
  }

  onSubmit() {
  this.submitted = true;
this.submit();
  
  }

  newDevice() {
    this.model = new Device();
  }

  selectDevice(type: SystemDevice): void {

    this.selectedType = type;
  }
  selectUrl(url: String): void {

    
    this.selectedUrl = url;
    
  }

  save():void{
   
    
    this.model.url = this.selectedUrl;
    this.model.device = this.selectedType;
    this.model.currentState = this.model.device.states[1];
    window.scrollTo(0,document.body.scrollHeight);

  }
  goToDivision(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/division', id]);
  }


  submit():void{

  let child = this.posDev.nativeElement.children[0];


  let transform:string = child.style.webkitTransform;
  

 
  let webkit = transform.substr(transform.indexOf("(")+1,transform.lastIndexOf(")"));
  let vals = webkit.split(",");
  let x :number= +vals[0].replace("px","");
  let y:number= +vals[1].replace("px","");
  
  if(x < 0){
    x = 0;
  }
  if(y < 0){
    y = 0;
  }

  
  let division = document.getElementsByClassName("division")[0];
  let vwSizeString = division.attributes[3].nodeValue.replace("width: ","").replace("vw","").replace("height: ","").replace("vw;",""); //Gets width: Xvw; height Yvw;
  let pxSize = [division.clientWidth,division.clientHeight]; //Get them px values
  let vwSize = vwSizeString.split(";");

  //Now do the math..

  let ratio = [pxSize[0]/+vwSize[0],pxSize[1]/+vwSize[1]];
  //let divisionSize = document.getElementsByClassName("division")
  //WTF, this kinda works ? ?_?
  this.model.position ={
    x:x*1/ratio[0],
    y:y*1/ratio[1]
  }
  //get a proper fix for this.
  
 
  if(!this.isEdit){
      this.deviceService.add(this.model,this.division);
  }else{
    //update
  }
  
  this.router.navigate(["/division",this.division.id]);
  }

}
