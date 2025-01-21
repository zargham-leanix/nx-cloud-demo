import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo49Component } from './lib58-demo49.component';

describe('Lib58Demo49Component', () => {
  let component: Lib58Demo49Component;
  let fixture: ComponentFixture<Lib58Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
