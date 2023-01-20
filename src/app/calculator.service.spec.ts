import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add func test', () => {
    expect(service.add(4,4)).toBe(8);
  })

  it('sub func test', () => {
    expect(service.sub(4,4)).toBe(0);
  })

  it('mul func test', () => {
    expect(service.mul(4,4)).toBe(16);
  })

  it('divide func test', () => {
    expect(service.divide(4,2)).toBe(2);
  })

});
