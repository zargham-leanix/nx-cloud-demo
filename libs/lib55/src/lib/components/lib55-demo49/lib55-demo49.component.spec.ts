import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo49Component } from './lib55-demo49.component';

describe('Lib55Demo49Component', () => {
  let component: Lib55Demo49Component;
  let fixture: ComponentFixture<Lib55Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
