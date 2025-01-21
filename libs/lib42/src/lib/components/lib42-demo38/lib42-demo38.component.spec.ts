import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo38Component } from './lib42-demo38.component';

describe('Lib42Demo38Component', () => {
  let component: Lib42Demo38Component;
  let fixture: ComponentFixture<Lib42Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
