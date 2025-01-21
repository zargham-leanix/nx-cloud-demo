import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo49Component } from './lib75-demo49.component';

describe('Lib75Demo49Component', () => {
  let component: Lib75Demo49Component;
  let fixture: ComponentFixture<Lib75Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
