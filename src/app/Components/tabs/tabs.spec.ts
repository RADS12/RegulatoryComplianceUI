import { Tabs } from './tabs';

describe('Tabs', () => {
	let mockRouter: any;
	let mockAuthService: any;
	let component: Tabs;

	beforeEach(() => {
		mockRouter = {
			navigate: jasmine.createSpy('navigate')
		};
		mockAuthService = {
			isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(true)
		};
		component = new Tabs(mockRouter, mockAuthService);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should select tab and navigate', () => {
		component.selectTab(2);
		expect(component.selectedIndex).toBe(2);
		expect(mockRouter.navigate).toHaveBeenCalledWith(['points-fees']);
	});

	it('should detect failed tab', () => {
		component.tabs[1].status = 'failed';
		expect(component.isAnyTabFailed).toBeTrue();
	});

	it('should not detect failed tab if all passed', () => {
		component.tabs.forEach(tab => tab.status = 'passed');
		expect(component.isAnyTabFailed).toBeFalse();
	});

		it('should redirect to login if not logged in', () => {
			mockAuthService.isLoggedIn.and.returnValue(false);
			component = new Tabs(mockRouter, mockAuthService);
			expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
		});

		it('should handle selectTab with out-of-bounds index', () => {
			expect(() => component.selectTab(-1)).toThrow();
			expect(() => component.selectTab(100)).toThrow();
		});

		it('should handle tabs array with unexpected status values', () => {
			component.tabs = [
				{ label: 'Tab1', route: 'route1', status: 'unknown' },
				{ label: 'Tab2', route: 'route2', status: 'passed' }
			];
			expect(component.isAnyTabFailed).toBeFalse();
			component.tabs[0].status = 'failed';
			expect(component.isAnyTabFailed).toBeTrue();
		});
});
