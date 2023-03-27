import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer= false;
  serverCreated=false;
  serverCreateStatus="No Server was created";
  serverName="Test";
  Username="";
  servers = ['TestServer','TestServer 2'];
  // showsecret=false;
  isShowDisplay=false;
  log: Date[] = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
  }
  ngOnInit(): void {
    
  }
  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreateStatus="Server was created Name is "+ this.serverName;
  }
  onUpdateServerName(event:Event){
    // console.log(event) 
    this.serverName=(<HTMLInputElement>event.target).value
    
  }
  
  onToggleDisplay() {
    this.isShowDisplay = !this.isShowDisplay;
    this.log.push(new Date());
    
  }
  
  
}
