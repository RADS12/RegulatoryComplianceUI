
import { Routes } from '@angular/router';
import { AuthGuard } from './Services/auth.guard';
import { Tabs } from './Components/tabs/tabs';
import { SafeHarbor } from './Components/safeHarbor/safeHarbor';
import { HighCost } from './Components/highCost/highCost';
import { PointsFees } from './Components/pointsFees/pointsFees';
import { StateRegulatoryTests } from './Components/stateRegulatoryTests/stateRegulatoryTests';
import { LoginComponent } from './Components/login/login';

export const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{
		path: '',
		component: Tabs,
		children: [
			{ path: 'safe-harbor', component: SafeHarbor, canActivate: [AuthGuard] },
			{ path: 'high-cost', component: HighCost, canActivate: [AuthGuard] },
			{ path: 'points-fees', component: PointsFees, canActivate: [AuthGuard] },
			{ path: 'state-regulatory-tests', component: StateRegulatoryTests, canActivate: [AuthGuard] },
			{ path: '', redirectTo: 'points-fees', pathMatch: 'full' }
		]
	}
];
