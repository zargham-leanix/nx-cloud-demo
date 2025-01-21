import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo8Component } from './lib10-demo8.component';

describe('Lib10Demo8Component', () => {
  let component: Lib10Demo8Component;
  let fixture: ComponentFixture<Lib10Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
