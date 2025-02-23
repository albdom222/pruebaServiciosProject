import {Component, OnInit} from '@angular/core';
import {ProductoService} from "../../services/producto.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  title: string = '';
  price: number = 0;
  products: any[] = [];

  constructor(private serviceProducto: ProductoService) { }

  ngOnInit(){
    this.products = this.serviceProducto.getProductos();
  }

  addProducto(){
    this.serviceProducto.addProductoService(this.title, this.price);
    this.title = '';
    this.price = 0;
  }

  deleteProducto(id: number){
    this.serviceProducto.deleteProductoService(id);
    this.products = this.serviceProducto.getProductos();
  }

  showProductoPrecioMayor(){
    this.serviceProducto.showProductoPrecioMayorService();
  }

  getProductoByTitle(title: string){
    let producto = this.products.find(product => product.title === title);
    if(producto){
      this.serviceProducto.getProductoByTitleService(title);
    }else{
      console.error("No se encontro el producto");
    }
  }

}
