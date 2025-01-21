import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo29Component } from './lib10-demo29.component';

describe('Lib10Demo29Component', () => {
  let component: Lib10Demo29Component;
  let fixture: ComponentFixture<Lib10Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
