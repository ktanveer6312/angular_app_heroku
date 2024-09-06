import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WalletComponent } from './wallet/wallet.component';
import { RefferalComponent } from './refferal/refferal.component';
import { TaskComponent } from './task/task.component';

export const routes: Routes = [{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'wallet', component: WalletComponent },
    { path: 'referal', component: RefferalComponent },
    { path: 'task', component: TaskComponent },
];
