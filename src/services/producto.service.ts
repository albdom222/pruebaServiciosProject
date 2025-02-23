import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private productos = [
    { id: 1, title: 'Producto 1', price: 10 },
    { id: 2, title: 'Producto 2', price: 30 },
    { id: 3, title: 'Producto 3', price: 30 },
    { id: 4, title: 'Producto 4', price: 50 },
  ]

  constructor(){}

  getProductos(){
    return this.productos;
  }

  addProductoService(title: string, price: number){
    const newProducto = {id: this.productos.length + 1, title, price};
    this.productos.push(newProducto);
  }

  deleteProductoService(id: number){
    this.productos = this.productos.filter(producto => producto.id !== id);
  }

  showProductoPrecioMayorService(){
    let productoMayor = this.productos[0];

    for(let i = 0; i < this.productos.length; i++){
      if(productoMayor.price <= this.productos[i].price){
        productoMayor = this.productos[i];
      }
    }
    console.log(productoMayor.title);
  }

  getProductoByTitleService(title: string){
    console.log(title);
  }







}


