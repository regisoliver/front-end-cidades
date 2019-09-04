import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Cidades } from 'src/model/cidades';

@Component({
  selector: 'app-cidades-detalhe',
  templateUrl: './cidades-detalhe.component.html',
  styleUrls: ['./cidades-detalhe.component.scss']
})
export class CidadesDetalheComponent implements OnInit {
  cidade: Cidades = { _id: '', ibge_id: '', uf: '', name: '', 
    capital: '', lon: '', lat: '', no_accents: null, alternative_names: null, microregion: null,
    mesoregion: null };
  isLoadingResults = true;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.getCidade(this.route.snapshot.params['id']);
  }

  getCidade(id) {
    this.api.getCidade(id)
      .subscribe(data => {
        this.cidade = data;
        console.log(this.cidade);
        this.isLoadingResults = false;
      });
  }

  deleteCidade(id) {
    this.isLoadingResults = true;
    this.api.deleteCidade(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/cidades']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
