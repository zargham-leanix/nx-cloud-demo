import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo49Component } from './lib47-demo49.component';

describe('Lib47Demo49Component', () => {
  let component: Lib47Demo49Component;
  let fixture: ComponentFixture<Lib47Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
