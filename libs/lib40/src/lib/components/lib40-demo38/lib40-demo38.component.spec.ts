import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo38Component } from './lib40-demo38.component';

describe('Lib40Demo38Component', () => {
  let component: Lib40Demo38Component;
  let fixture: ComponentFixture<Lib40Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
