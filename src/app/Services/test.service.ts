import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }


getData(){
const data=[
  {"id":101,"name":"John","salary":200},
  {"id":102,"name":"man","salary":300},
  {"id":103,"name":"ram","salary":100},
  {"id":104,"name":"sam","salary":500},
]
return data;

 
}



}