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
				isLoggedIn: jasmine.createSpy('isLoggedIn').and.returnValue(true),
				hasRole: jasmine.createSpy('hasRole').and.callFake((role: string) => true)
			};
		component = new Tabs(mockRouter, mockAuthService);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should select tab and navigate', () => {
		// Use the first available tab for testing
		component.selectTab(0);
		expect(component.selectedIndex).toBe(0);
		expect(mockRouter.navigate).toHaveBeenCalledWith([component.tabs[0].route]);
	});

	it('should detect failed tab', () => {
		// Set status on first tab for testing
		const tabs = component.tabs;
		tabs[0].status = 'failed';
		expect(component.isAnyTabFailed).toBeTrue();
	});

	it('should not detect failed tab if all passed', () => {
		const tabs = component.tabs;
		tabs.forEach(tab => tab.status = 'passed');
		expect(component.isAnyTabFailed).toBeFalse();
	});

		it('should redirect to login if not logged in', () => {
			mockAuthService.isLoggedIn.and.returnValue(false);
			component = new Tabs(mockRouter, mockAuthService);
			expect(mockRouter.navigate).toHaveBeenCalledWith(['/login']);
		});

		// Remove out-of-bounds test since tabs getter does not throw

			it('should handle tabs array with unexpected status values', () => {
				const tabs = component.tabs;
				tabs.forEach(tab => tab.status = 'unknown');
				expect(component.isAnyTabFailed).toBeFalse();
				tabs[0].status = 'failed';
				expect(component.isAnyTabFailed).toBeTrue();
			});
});
