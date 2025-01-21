import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo38Component } from './lib91-demo38.component';

describe('Lib91Demo38Component', () => {
  let component: Lib91Demo38Component;
  let fixture: ComponentFixture<Lib91Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
