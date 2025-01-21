import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo6Component } from './lib10-demo6.component';

describe('Lib10Demo6Component', () => {
  let component: Lib10Demo6Component;
  let fixture: ComponentFixture<Lib10Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
