import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo13Component } from './lib10-demo13.component';

describe('Lib10Demo13Component', () => {
  let component: Lib10Demo13Component;
  let fixture: ComponentFixture<Lib10Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
