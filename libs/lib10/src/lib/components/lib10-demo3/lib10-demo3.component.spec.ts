import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo3Component } from './lib10-demo3.component';

describe('Lib10Demo3Component', () => {
  let component: Lib10Demo3Component;
  let fixture: ComponentFixture<Lib10Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
