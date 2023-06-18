import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialPageComponent } from '@app/pages/material-page/material-page.component';
import { StartApgeComponent } from '@app/pages/start-apge/start-apge.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: StartApgeComponent },
    { path: 'material', component: MaterialPageComponent },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
