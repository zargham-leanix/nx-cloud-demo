import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo49Component } from './lib41-demo49.component';

describe('Lib41Demo49Component', () => {
  let component: Lib41Demo49Component;
  let fixture: ComponentFixture<Lib41Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
