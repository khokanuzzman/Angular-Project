import { Component, OnInit } from '@angular/core';
import{Http} from '@angular/http';

@Component({
  selector: 'app-crud-operation',
  templateUrl: './crud-operation.component.html',
  styleUrls: ['./crud-operation.component.css'],

})
export class CrudOperationComponent implements OnInit {
  public posts=[];
  private url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) {
  }

  createPost(input: HTMLInputElement)
  {
    let post:any = {title:input.value};
    input.value ='';
    this.http.post(this.url,JSON.stringify(post))
    .subscribe(response=>{
      post['id']=response.json().id;
      this.posts.splice(0,0,post);
    });
  }

  editData(data:string,input:any){
    input.value=data;
    console.log(data);

  }

  updatePost(post,data:HTMLInputElement){
    post.title =data.value;
    data.value="";
    if(data.value.length === 0){
      this.http.patch(this.url+'/'+ post.id, JSON.stringify({isread:true}))
      .subscribe(response=>{
        console.log(this.posts.push(post));
      });
    }else{
      alert('insert some data')
    }
  }
  deletePost(post){
    this.http.delete(this.url +'/'+ post.id)
    .subscribe(response=>{
        let index= this.posts.indexOf(post);
        console.log(this.posts.splice(index, 1));
    });
  }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response=>{
      this.posts = response.json();
    });
  }

}
