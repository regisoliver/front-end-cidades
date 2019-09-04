import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cidades-editar',
  templateUrl: './cidades-editar.component.html',
  styleUrls: ['./cidades-editar.component.scss']
})
export class CidadesEditarComponent implements OnInit {
  _id: String = '';
  productForm: FormGroup;
  ibge_id: String = '';
  uf: String = '';
  name: String = '';
  Capital: String ='';
  lon: String ='';
  lat: String = '';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCidade(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
   'ibge_id' : [null, Validators.required],
   'uf' : [null, Validators.required],
   'name' : [null, Validators.required],
   'capital' : [null, Validators.required],
   'lon' : [null, Validators.required],
   'lat' : [null, Validators.required]
    });
  }


  getCidade(id) {
    this.api.getCidade(id).subscribe(data => {
      this._id = data._id;
      this.productForm.setValue({
        ibge_id: data.ibge_id,
        uf: data.uf,
        name: data.name,
        capital: data.capital,
        lon: data.lon,
        lat: data.lat
      });
    });
  }

updateCidade(form: NgForm) {
  this.isLoadingResults = true;
  this.api.updateCidade(this._id)
    .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/cidades-detalhe/' + this._id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
}
}
