import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo38Component } from './lib53-demo38.component';

describe('Lib53Demo38Component', () => {
  let component: Lib53Demo38Component;
  let fixture: ComponentFixture<Lib53Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
