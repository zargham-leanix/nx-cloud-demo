import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo25Component } from './lib10-demo25.component';

describe('Lib10Demo25Component', () => {
  let component: Lib10Demo25Component;
  let fixture: ComponentFixture<Lib10Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
