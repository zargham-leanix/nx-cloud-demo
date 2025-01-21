import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo12Component } from './lib10-demo12.component';

describe('Lib10Demo12Component', () => {
  let component: Lib10Demo12Component;
  let fixture: ComponentFixture<Lib10Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
