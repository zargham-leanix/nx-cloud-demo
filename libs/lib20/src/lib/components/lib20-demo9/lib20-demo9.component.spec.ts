import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo9Component } from './lib20-demo9.component';

describe('Lib20Demo9Component', () => {
  let component: Lib20Demo9Component;
  let fixture: ComponentFixture<Lib20Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
