import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo36Component } from './lib28-demo36.component';

describe('Lib28Demo36Component', () => {
  let component: Lib28Demo36Component;
  let fixture: ComponentFixture<Lib28Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
