
import { Routes } from '@angular/router';
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
			{ path: 'safe-harbor', component: SafeHarbor },
			{ path: 'high-cost', component: HighCost },
			{ path: 'points-fees', component: PointsFees },
			{ path: 'state-regulatory-tests', component: StateRegulatoryTests },
			{ path: '', redirectTo: 'safe-harbor', pathMatch: 'full' }
		]
	}
];
