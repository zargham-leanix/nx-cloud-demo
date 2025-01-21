import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo45Component } from './lib26-demo45.component';

describe('Lib26Demo45Component', () => {
  let component: Lib26Demo45Component;
  let fixture: ComponentFixture<Lib26Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
