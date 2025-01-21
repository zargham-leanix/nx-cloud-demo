import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo36Component } from './lib42-demo36.component';

describe('Lib42Demo36Component', () => {
  let component: Lib42Demo36Component;
  let fixture: ComponentFixture<Lib42Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
