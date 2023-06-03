import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectCard } from '@common/project-card';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
    cards: ProjectCard[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.fetchProjects();
    }

    fetchProjects() {
        this.http.get<ProjectCard[]>('/assets/projects.json').subscribe((data: ProjectCard[]) => {
            this.cards = data;
        });
    }

    redirectToCardLink(link: string) {
        window.open(link, '_blank');
    }
}
