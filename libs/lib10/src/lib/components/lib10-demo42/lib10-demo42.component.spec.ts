import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo42Component } from './lib10-demo42.component';

describe('Lib10Demo42Component', () => {
  let component: Lib10Demo42Component;
  let fixture: ComponentFixture<Lib10Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
