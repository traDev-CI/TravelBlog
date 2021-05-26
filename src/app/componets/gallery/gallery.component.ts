import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { CrudBService } from 'src/app/services/crud-b.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  posts: any;
  commnets: any;
  mainFilter = 'all';
  isActive: boolean = true;
  faEdit = faEdit
  constructor(
    private CrudBService: CrudBService,
    ) { 
    
  }
 

  ngOnInit(): void {
    this.posts = this.CrudBService.showPosts().subscribe(post =>{
      this.init(post)
    });
  }


  filterPosts(filterType: string){
    this.mainFilter = filterType;
  }
  
  init(posts: any){
    const newA = [];
    var numCommenst = 0;
    for (let i = 0; i < posts.length; i++) {
      if(this.mainFilter == 'all'){
        numCommenst = Object.keys(posts[i].comments).length;
        const formatPosts ={
          category: posts[i].category,
          comments: numCommenst,
          description: posts[i].description,
          id: posts[i].id,
          image: posts[i].image,
          publishedAt: posts[i].publishetAt,
          shortDescription: posts[i].shortDescription,
          title: posts[i].title,
        }
        // (posts[i]).push({numComments: numCommenst})
        newA.push(formatPosts)
      }else if(posts[i].category == this.mainFilter){
        newA.push(posts[i])   
      }
    }

    this.posts = newA;
    console.log(newA);
    
    
    
    
  }



}
