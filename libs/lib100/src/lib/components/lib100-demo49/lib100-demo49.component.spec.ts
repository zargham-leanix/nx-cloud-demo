import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo49Component } from './lib100-demo49.component';

describe('Lib100Demo49Component', () => {
  let component: Lib100Demo49Component;
  let fixture: ComponentFixture<Lib100Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
