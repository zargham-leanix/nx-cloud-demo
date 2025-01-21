import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo43Component } from './lib10-demo43.component';

describe('Lib10Demo43Component', () => {
  let component: Lib10Demo43Component;
  let fixture: ComponentFixture<Lib10Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
