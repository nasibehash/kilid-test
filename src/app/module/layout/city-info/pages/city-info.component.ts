import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CityInfoService } from '../sandBox/services/city-info.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {
  url: string = '';
  typeSelected: any = 'buy';
  prpSelected: any = 'Apartment';

  searchInfo: any = {};
  cardInfo = [];
  newCardInfo = [];
  cityInfo: any;
  propertyList = [
    { name: 'آپارتمان', value: 'prpApartmentTower' },
    { name: 'ویلایی', value: 'prpVillaGarden' },
    { name: 'دفتر کار', value: 'prpOffice' }
  ];
  pagination: any = { page: 0, sort: 'date,desc' };


  constructor(private cityInfoService: CityInfoService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.url = this.router.url.slice(1);
    this.postSeoFilterSearch();
    this.getSeoPhraseByUrl();
setTimeout(() => {
  this.searchPortal(this.pagination, this.searchInfo);

}, 500);
  }



  postSeoFilterSearch() {
    this.cityInfoService.postSeoFilterSearch(this.url).subscribe((response) => {
      this.searchInfo= response.filters;

    });
  }
  searchPortal(params: any, searchInfo: any) {
    this.searchInfo.subType = this.typeSelected;
    this.cityInfoService.searchPortal(params, searchInfo).subscribe((response) => {
      this.cardInfo = response.content.filter((a: any) => a.type !== "BANNER");
    });
  }
  getSeoPhraseByUrl() {

    this.cityInfoService.getSeoPhraseByUrl(this.url).subscribe((response) => {
      this.cityInfo = response;
    });
  }


  onScroll() {
    this.pagination.page++;
    this.cityInfoService.searchPortal(this.pagination, this.searchInfo).subscribe(
      (elements) => {
        this.newCardInfo = elements.content.filter((a: any) => a.type !== "BANNER");
        this.newCardInfo.forEach((element) => {
          this.cardInfo.push(element);
        });
      });
  }


  onSelect(val: any) {
    this.typeSelected = val;
    this.searchInfo.subType = this.typeSelected;
    this.searchPortal(this.pagination, this.searchInfo);
    this.onScroll();
    const urlTree = this.router.createUrlTree([this.typeSelected + '-' + this.prpSelected, 'tehran'], {
      queryParamsHandling: 'merge'
    });

    this.location.go(urlTree.toString());
    this.url = urlTree.toString().slice(1);
    this.getSeoPhraseByUrl();

  }
  onSelectPrp(val: any) {
    this.prpSelected = val
      delete this.searchInfo.prpApartmentTower;
      this.prpSelected.forEach((element: any) => {
        this.searchInfo = { ...this.searchInfo, [element]: true };
        this.prpSelected= [ element.replace('prp','')];
      });
      this.searchPortal(this.pagination, this.searchInfo);
      this.onScroll();
      const urlTree = this.router.createUrlTree([this.typeSelected + '-' + this.prpSelected, 'tehran'], {
        queryParamsHandling: 'merge'
      });

      this.location.go(urlTree.toString());
      this.url = urlTree.toString().slice(1);
     this.getSeoPhraseByUrl();

  }
}

