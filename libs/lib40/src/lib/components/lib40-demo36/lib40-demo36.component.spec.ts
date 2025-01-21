import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo36Component } from './lib40-demo36.component';

describe('Lib40Demo36Component', () => {
  let component: Lib40Demo36Component;
  let fixture: ComponentFixture<Lib40Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
