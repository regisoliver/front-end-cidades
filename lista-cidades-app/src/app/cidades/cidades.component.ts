import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cidades } from 'src/model/cidades';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.scss']
})
export class CidadesComponent implements OnInit {

  displayedColumns: string[] = [ 'ibge_id','uf','name','capital',
    'lon','lat','no_accents','alternative_names','microregion','mesoregion'];
  dataSource: Cidades[];
  isLoadingResults: boolean;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getCidades()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
