import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo27Component } from './lib10-demo27.component';

describe('Lib10Demo27Component', () => {
  let component: Lib10Demo27Component;
  let fixture: ComponentFixture<Lib10Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
