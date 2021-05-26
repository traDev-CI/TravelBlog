import { Component, OnInit, Input } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { faPlusCircle, faEdit } from '@fortawesome/free-solid-svg-icons';
import { CrudBService } from 'src/app/services/crud-b.service';


@Component({
    selector: 'app-editPost',
    templateUrl: './editPost.component.html',
    styleUrls: ['./editPost.component.scss']
  })
  export class EditPostComponent implements OnInit {
    closeResult = '';
    faPlusCircle = faPlusCircle
    faEdit = faEdit
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
    @Input() title!: string;
    @Input()description!: string;
    @Input()category!: string;
    @Input()urlImage!: string;
    @Input() id!: 0;
    
    titleAlert: string = 'This field is required'

    constructor(
      private modalService: NgbModal,
      private CrudBService: CrudBService,
      private fb: FormBuilder
      ) { }

      ngOnInit(): void {
        this.CrudBService.getCategories().subscribe(category => {
          this.categories = category
        })
        this.fForm = this.fb.group({
            'title': [this.title, Validators.required],
            'description': [this.description, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
            'category': [this.category, Validators.required],
            'urlImage': [this.urlImage, Validators.required]
          })
        
      }
    

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    editPost(post: any){
      this.dataPost = [{
        
        title: post.title,
        description: post.description,
        category: post.category,
        urlImage: post.urlImage,
      }]
      this.CrudBService.updatePosts(this.dataPost, this.id);
      
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
  