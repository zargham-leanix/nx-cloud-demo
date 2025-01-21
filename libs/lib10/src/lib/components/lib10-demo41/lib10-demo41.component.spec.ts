import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo41Component } from './lib10-demo41.component';

describe('Lib10Demo41Component', () => {
  let component: Lib10Demo41Component;
  let fixture: ComponentFixture<Lib10Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
