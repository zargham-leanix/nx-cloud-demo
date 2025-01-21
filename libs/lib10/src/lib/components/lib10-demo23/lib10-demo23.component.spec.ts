import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo23Component } from './lib10-demo23.component';

describe('Lib10Demo23Component', () => {
  let component: Lib10Demo23Component;
  let fixture: ComponentFixture<Lib10Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
