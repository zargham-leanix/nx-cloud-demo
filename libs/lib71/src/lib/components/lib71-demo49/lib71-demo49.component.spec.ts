import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo49Component } from './lib71-demo49.component';

describe('Lib71Demo49Component', () => {
  let component: Lib71Demo49Component;
  let fixture: ComponentFixture<Lib71Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
