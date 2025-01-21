import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo49Component } from './lib28-demo49.component';

describe('Lib28Demo49Component', () => {
  let component: Lib28Demo49Component;
  let fixture: ComponentFixture<Lib28Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
