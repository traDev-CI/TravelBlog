import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { CrudBService } from 'src/app/services/crud-b.service';

@Component({
    selector: 'app-newPost',
    templateUrl: './newPost.component.html',
    styleUrls: ['./newPost.component.scss']
  })
  export class NewPostComponent implements OnInit {
    closeResult = '';
    faPlusCircle = faPlusCircle
    showModal: boolean = false;
    dataPost: any[] = [
      {
        title: "",
        description: "",
        category: "",
        urlImage: "",
      }
    ]
    categories: any;
    fForm!: FormGroup;
    post: any;
    title!: string;
    description!: string;
    category!: string;
    urlImage!: string;
    titleAlert: string = 'This field is required'

    constructor(
      private modalService: NgbModal,
      private CrudBService: CrudBService,
      private fb: FormBuilder
      ) { 
          this.fForm = fb.group({
            'title': [null, Validators.required],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
            'category': [null, Validators.required],
            'urlImage': [null, Validators.required]
          })

      }

      ngOnInit(): void {
        this.CrudBService.getCategories().subscribe(category => {
          this.categories = category
        })
      }
    

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.fForm = this.fb.group({
            'title': [null, Validators.required],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
            'category': [null, Validators.required],
            'urlImage': [null, Validators.required]
          })
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    createPost(post: any){
      this.dataPost = [{
        title: post.title,
        description: post.description,
        category: post.category,
        urlImage: post.urlImage,
      }]
      this.CrudBService.createPost(this.dataPost);
      
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  
  

  }
  