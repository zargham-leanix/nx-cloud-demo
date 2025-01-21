import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo39Component } from './lib10-demo39.component';

describe('Lib10Demo39Component', () => {
  let component: Lib10Demo39Component;
  let fixture: ComponentFixture<Lib10Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
