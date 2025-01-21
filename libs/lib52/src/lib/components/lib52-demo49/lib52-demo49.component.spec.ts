import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo49Component } from './lib52-demo49.component';

describe('Lib52Demo49Component', () => {
  let component: Lib52Demo49Component;
  let fixture: ComponentFixture<Lib52Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
