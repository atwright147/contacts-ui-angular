import { Injector, NgZone } from '@angular/core';
import { CustomErrorHandler } from './error-handler';

describe('CustomErrorHandler', () => {
  let injector: Injector;
  let zone: NgZone;
  let klass: CustomErrorHandler;

  beforeEach(() => {
    injector = jasmine.createSpyObj('Injector', ['get']);
    zone = jasmine.createSpyObj('NgZone', ['run']);
    klass = new CustomErrorHandler(injector, zone);
  });

  it('should create an instance', () => {
    expect(new CustomErrorHandler(injector, zone)).toBeTruthy();
  });

  it('should log the error to the console', () => {
    const mockError = { message: 'Mock error message' };
    const consoleInfoSpy = spyOn(console, 'info');

    klass.handleError(mockError);

    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
    expect(consoleInfoSpy).toHaveBeenCalledWith('An error occurred:', mockError.message);
  });
});
