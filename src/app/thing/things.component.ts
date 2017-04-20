import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ThingService} from '../services/thing.service';
import {Thing} from "./model/thing";


@Component({
    selector: 'my-things',
    templateUrl: './things.component.html',
    styleUrls: ['./things.component.css'],
})
export class ThingsComponent implements OnInit {
    things: Thing[];

    constructor(private router: Router,
                private thingService: ThingService) {
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.thingService.getThings().then(things => this.things = things);
    }

}
