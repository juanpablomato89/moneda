import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'MLC'
  total = 0
  monedas: string[] = ['USD', 'MLC', 'CUP'];


  constructor() { }

  ngOnInit(): void {
  }

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'CUP') {
          this.total = this.cantidad * 295;

        } else if (this.quiero === 'MLC') {
          this.total = this.cantidad * 0.86

        } else {
          this.total = this.cantidad;

        }
        break;
      case 'MLC':
        if (this.quiero === 'CUP') {
          this.total = this.cantidad * 260;

        } else if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.90

        } else {
          this.total = this.cantidad;

        }
        break;
      case 'CUP':
        if (this.quiero === 'MLC') {
          this.total = this.cantidad / 260;

        } else if (this.quiero === 'USD') {
          this.total = this.cantidad / 295;

        } else {
          this.total = this.cantidad;

        }
        break;
    }
  }

}
