import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

interface Supplier{
  name: string,
  address: string,
  email:string,
  phone:string
}
@Component({
  selector: 'app-data',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  suppliers: Array<Supplier> = [
    {
      name:'Supplier 1',address: 'Address 1',phone:'1234567890', email:'Supplier1@gmail.com'},
      {name:'Supplier 2',address: 'Address 2',phone:'1234567890', email:'Supplier2@gmail.com'},
      {name:'Supplier 3',address: 'Address 3',phone:'1234567890', email:'Supplier3@gmail.com'},
      {name:'Supplier 4',address: 'Address 4',phone:'1234567890', email:'Supplier4@gmail.com'},
      {name:'Supplier 5',address: 'Address 5',phone:'1234567890', email:'Supplier5@gmail.com'},
      {name:'Supplier 6',address: 'Address 6',phone:'1234567890', email:'Supplier6@gmail.com'},
      {name:'Supplier 7',address: 'Address 7',phone:'1234567890', email:'Supplier7@gmail.com'},
      {name:'Supplier 8',address: 'Address 8',phone:'1234567890', email:'Supplier8@gmail.com'},
      {name:'Supplier 9',address: 'Address 9',phone:'1234567890', email:'Supplier9@gmail.com'},
      {name:'Supplier 10',address: 'Address 10',phone:'1234567890', email:'Supplier10@gmail.com'},
      {name:'Supplier 11',address: 'Address 11',phone:'1234567890', email:'Supplier11@gmail.com'},
      {name:'Supplier 12',address: 'Address 12',phone:'1234567890', email:'Supplier12@gmail.com'},
      {name:'Supplier 13',address: 'Address 13',phone:'1234567890', email:'Supplier13@gmail.com'},
      {name:'Supplier 14',address: 'Address 14',phone:'1234567890', email:'Supplier14@gmail.com'},
      {name:'Supplier 15',address: 'Address 15',phone:'1234567890', email:'Supplier15@gmail.com'},
      {name:'Supplier 16',address: 'Address 16',phone:'1234567890', email:'Supplier16@gmail.com'},
      {name:'Supplier 17',address: 'Address 17',phone:'1234567890', email:'Supplier17@gmail.com'},
      {name:'Supplier 18',address: 'Address 18',phone:'1234567890', email:'Supplier18@gmail.com'},
      {name:'Supplier 19',address: 'Address 19',phone:'1234567890', email:'Supplier19@gmail.com'},
      {name:'Supplier 20',address: 'Address 20',phone:'1234567890', email:'Supplier20@gmail.com'},
      {name:'Supplier 21',address: 'Address 21',phone:'1234567890', email:'Supplier21@gmail.com'},
        
  ]

  currentPage: number=1;
  pageSize:number=5;
  filteredSupplier: Array<Supplier> = this.suppliers;
  pageSizes: Array<Number> = [ 5, 10, 20]
   
  constructor(private firestore: Firestore) {}
  ngOnInit (){
    this.visibleData();
    this.pageNumbers();
    this.loadFireStore();
  }

  loadFireStore(){
    let collectionRef = collection(this.firestore,'suppliers');
    collectionData(collectionRef).subscribe((val)=>{
    console.log(val);
    })
  }
  visibleData(){
    let startIndex = (this.currentPage - 1)* this.pageSize ;
    let endIndex = startIndex + this.pageSize;
    // console.log('Start Index',startIndex);
    return this.filteredSupplier.slice(startIndex, endIndex);

  }

  nextPage(){
    this.currentPage++;
    // console.log('Current Page',this.currentPage);
    this.visibleData();

  }
  previousPage(){
    this.currentPage--;
    this.visibleData();

  }
  pageNumbers(){
    let totalPages = Math.ceil(this.filteredSupplier.length / this.pageSize);
    // console.log(totalPages);
    let pageNumArray = new Array(totalPages);
    // console.log(pageNumArray);
    return pageNumArray;

  }
  changePage(pageNumber:number){
    this.currentPage = pageNumber;
    this.visibleData();
    
  }
  changePageSize(pageSize:any){
  this.pageSize = pageSize;
  this.visibleData();
    
  }
  filterData(searchTerm:string){
   this.filteredSupplier = this.suppliers.filter((item)=>{
   Object.values(item).some((val)=>{
    val.toLowerCase().include(searchTerm.toLowerCase());
   })
   })
    this.visibleData();
  }
}
