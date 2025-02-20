import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {   id: 1, name: 'David', email: 'david@example.com'},
    {   id: 2, name: 'Carlos', email: 'carlos@example.com'},
    {   id: 3, name: 'Maria', email: 'maria@example.com'},
    {   id: 4, name: 'Ismael', email: 'ismael@example.com'},
    {   id: 5, name: 'Hugo', email: 'hugo@example.com'},
    {   id: 6, name: 'Paloma', email: 'paloma@example.com'},
    {   id: 7, name: 'Miriam', email: 'miriam@example.com'},
    {   id: 8, name: 'Pablo', email: 'pablo@example.com'}
  ];

  constructor() { }

  /**
   * Funcion para obtener la lista de usuarios
   * @returns lista de usuarios
   */
  getUsers(){
    return this.users;
  }


  /**
   * Funcion para agregar un usuario a la lista
   */
  addUser(name: string, email:string){
    const newUser = {id : this.users.length + 1, name, email};
    this.users.push(newUser);
  }

  /**
   * Funcion para eliminar un usuario
   *  */
  deleteUser(userId: number){
    this.users = this.users.filter(user => user.id !== userId);
  }

  /**
   * Funcion para actualizar un usuario
   * @param userId
   * @param name
   * @param email
   */
  updateUser(userId: number, name: string, email: string){
    const user = this.users.find(user => user.id === userId);
    if(user){
      user.name = name;
      user.email = email;

    }
  }

  /**
   * Obtiene un usuario a traves del id
   * @param id
   */
  getUserById(id: number){
    return this.users.find(user => user.id === id);
  }

}
