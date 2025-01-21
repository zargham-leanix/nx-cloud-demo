import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo36Component } from './lib91-demo36.component';

describe('Lib91Demo36Component', () => {
  let component: Lib91Demo36Component;
  let fixture: ComponentFixture<Lib91Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
