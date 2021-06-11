import { Component, OnInit } from '@angular/core';
import { ConstructionService } from './construction.service';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.scss'],
})

export class ConstructionComponent implements OnInit {
    public construct = {
        designer_name: '',
    }

    constructor (
        private constructionService: ConstructionService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.constructionService.GpCreate(this.construct).subscribe(data => {
            this.construct.designer_name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}