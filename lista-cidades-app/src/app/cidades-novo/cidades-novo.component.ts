import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cidades-novo',
  templateUrl: './cidades-novo.component.html',
  styleUrls: ['./cidades-novo.component.scss']
})
export class CidadesNovoComponent implements OnInit {

  productForm: FormGroup;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.productForm = this.formBuilder.group({
      'ibge_id' : [null, Validators.required],
      'uf' : [null, [Validators.required, Validators.minLength(4)]],
      'name' : [null, Validators.required],
      'capital' : [null, Validators.required],
      'lon' : [null, Validators.required],
      'lat' : [null, Validators.required]
    });
  }

  addCidade(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addCidade(form)
      .subscribe(res => {
          const id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/cidades-detalhe', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
