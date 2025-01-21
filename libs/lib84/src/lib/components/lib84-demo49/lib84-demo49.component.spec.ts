import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo49Component } from './lib84-demo49.component';

describe('Lib84Demo49Component', () => {
  let component: Lib84Demo49Component;
  let fixture: ComponentFixture<Lib84Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
