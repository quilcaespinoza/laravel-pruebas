import {Component, Input, OnInit} from '@angular/core';
import { PingService } from '../shared/ping.service';
import { DiscosService } from '../shared/discos.service';
import {CarpetasService} from '../shared/carpetas.service';
import * as com from '../app.component';
import {EventListener} from '@angular/core/src/debug/debug_node';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', './semaforo.component.css']
})

export class MainComponent implements OnInit {

  idPing = [];
  idDisk = [];
  infDisk = [];
  idCarpeta = [];
  listAmbar = [];
  listRojo = [];
  listVerde = [];
  alterAmbar = [];
  alterRojo = [];
  alterVerde = [];
  tRojo = 0;
  tVerde = 0;
  tAmbar = 0;
  total = 0;
  aTRojo = 0;
  aTVerde = 0;
  aTAmbar = 0;
  arrPingG = [];
  progressState = false;
  // DISCOS
  tDiscos = 0;
  progressDisco = false;
  // Carpetas
  CLRojo = [];
  CLVerde = [];
  CLAmbar = [];
  ALRojo = [];
  ALAmbar = [];
  ALVerde = [];
  CRojo = 0;
  CVerde = 0;
  CAmbar = 0;
  ATRojo = 0;
  ATVerde = 0;
  ATAmbar = 0;
   data = {
    user: 'admin',
    pwd: 'admin2018'
  };

  desplegateRojo = false;
  desplegateVerde = false;
  desplegateAmbar = false;
  progressCarpeta = false;

  constructor(private pingservice: PingService,
              private diskservice: DiscosService,
              private carpetaservice: CarpetasService) {
  }

  ngOnInit() {

    this.getDescripcionPing();
    this.getDataDisk();
    this.getDataCarpetas();
     setInterval(() => {
      this.getDescripcionPing();
      this.getDataCarpetas();
    }, 60000);
  }

  private getDescripcionPing() {
    this.total = 0;
    this.aTVerde = 0;
    this.aTAmbar = 0;
    this.aTRojo = 0;
    this.idPing = [];
    this.alterAmbar = [];
    this.alterRojo = [];
    this.alterVerde = [];
    this.pingservice.getIdPing()
      .subscribe(data => {
        this.idPing = data;
        for (let i = 0; i < this.idPing.length; i++) {
          this.pingservice.getDataPing(this.idPing[i].id)

            .subscribe(pingData => {
              this.arrPingG.push(pingData);
              if (pingData.estado === 'Excelente' || pingData.estado === 'Bueno') {
                this.alterVerde.push(pingData);
                this.alterVerde.sort(function (a, b) {
                  return a.Descripcion.localeCompare(b.Descripcion);
                });
                this.aTVerde++;
              } else if (pingData.estado === 'Regular' || pingData.estado === 'Malo') {
                this.alterAmbar.push(pingData);
                this.alterAmbar.sort(function (a, b) {
                  return a.Descripcion.localeCompare(b.Descripcion);
                });
                this.aTAmbar++;
              } else if (pingData.estado === 'Pesimo') {
                this.alterRojo.push(pingData);
                this.alterRojo.sort(function (a, b) {
                  return a.Descripcion.localeCompare(b.Descripcion);
                });
                this.aTRojo++;
              }
              this.total = this.aTRojo + this.aTVerde + this.aTAmbar;
              if (this.total === this.idPing.length) {
                this.listVerde = [];
                this.listRojo = [];
                this.listAmbar = [];
                // this.arrPingG = [];
                this.tRojo = 0;
                this.tVerde = 0;
                this.tAmbar = 0;
                this.progressState = true;
                this.tRojo = this.aTRojo;
                this.tVerde = this.aTVerde;
                this.tAmbar = this.aTAmbar;
                this.listVerde = this.alterVerde;
                this.listRojo = this.alterRojo;
                this.listAmbar = this.alterAmbar;
                // this.arrPingG.push(this.listVerde);
                // this.arrPingG.push(this.listRojo);
                // this.arrPingG.push(this.listAmbar);
              }
            });
        }
      });
  }

  private getDataDisk() {
    this.diskservice.getIds().subscribe(id => {
      this.idDisk = id;
      for (let i = 0; i < this.idDisk.length; i++) {
        this.diskservice.getDiskData(this.idDisk[i].id)
          .subscribe(data => {
            this.infDisk.push(data);
            this.tDiscos++;
            this.infDisk.sort(function (a, b) {
              return a.id - b.id;
            });
            if (this.tDiscos === this.idDisk.length) {
              setTimeout(() => {
                const elementosPorcentaje = document.querySelectorAll('.progress-circle');
                for (let a = 0; a < elementosPorcentaje.length; a++) {
                  elementosPorcentaje[a].classList.add(`progress-${this.infDisk[a].porcentajeUsado}`);
                }
              }, 200);
            }
            this.progressDisco = true;
          });
      }
    });
  }

  private getDataCarpetas() {


    this.ALRojo = [];
    this.ALAmbar = [];
    this.ALVerde = [];
    this.ATRojo = 0;
    this.ATVerde = 0;
    this.ATAmbar = 0;

    this.carpetaservice.getIdCarpetas()
      .subscribe(data => {
        this.idCarpeta = data;

        for (let i = 0; i < this.idCarpeta.length; i++) {
          this.carpetaservice.getDataCarpeta(this.idCarpeta[i].id)
            .subscribe(infC => {
              if (infC.state === 'Tolerable') {
                this.ALAmbar.push(infC);
                this.ATAmbar++;
                this.desplegateVerde = true;
              } else if (infC.state === 'Sincronizado') {
                this.ALVerde.push(infC);
                this.ATVerde++;
                this.desplegateAmbar = true;
              } else if (infC.state === 'Atender') {
                this.ALRojo.push(infC);
                this.ATRojo++;
                this.desplegateRojo = true;
              }
              if (this.ATRojo + this.ATVerde + this.ATAmbar === this.idCarpeta.length) {
                this.CLRojo = [];
                this.CLVerde = [];
                this.CLAmbar = [];
                this.CRojo = 0;
                this.CVerde = 0;
                this.CAmbar = 0;
                this.progressCarpeta = true;
                // Arrays
                this.CLAmbar = this.ALAmbar;
                this.CLRojo = this.ALRojo;
                this.CLVerde = this.ALVerde;
                // Cantidad
                this.CAmbar = this.ATAmbar;
                this.CRojo = this.ATRojo;
                this.CVerde = this.ATVerde;
              }
            });
        }
      });
  }

  // private findPingId(arr1, arr2,arr3, id) {
  //   // if(arr1.id === id;
  // }
  getId(id) {
    // console.log(this.arrPingG);
    // this.arrPingG.filter( (data) => {
    //   if (data.id === id) {
    //     if (data.estado === 'Excelente' || data.estado === 'Bueno') {
    // this.pingservice.getDataPing(id)
    //   .subscribe( data => {});
   const Lverde =  this.alterVerde.find( data => data.id === id);
   Lverde.estado = 'Pesimo';

          // else if (data.estado === 'Regular' || data.estado === 'Malo') {}
          // else if (data.estado === 'Pesimo') {}
      // }
    // });
      //   this.pingservice.getDataPing(id)
      //     if(data.)
      //     .subscribe( data => console.log(data));
      // }
    // });
    // this.pingservice.getDataPing(id)
    //   .subscribe( data => {
       // if (data.estado === 'Excelente' || data.estado === 'Bueno') {
       //   this.findPingId(, this.listVerde.id);
       // } else if (data.estado === 'Regular' || data.estado === 'Malo') {
       // } else if (data.estado === 'Pesimo') {
       // }
      //  this.listVerde.filter( (nk) => {
      //   if (nk.id === id) {
      //     console.log(nk);
      //   }
      //  }, arr => {});
      // // });
    // console.log(this.arrPingG)
  // public reoladtGetDescripcionPing() {
  //   this.getDescripcionPing();
  //   clearInterval(intervalPing);
  //   intervalPing =  setInterval( () => {
  //     this.getDescripcionPing();
  //   }, 6000 );
  // }
}
