import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib4Demo49Component } from './lib4-demo49.component';

describe('Lib4Demo49Component', () => {
  let component: Lib4Demo49Component;
  let fixture: ComponentFixture<Lib4Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib4Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib4Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
