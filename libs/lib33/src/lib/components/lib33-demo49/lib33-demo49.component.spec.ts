import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib33Demo49Component } from './lib33-demo49.component';

describe('Lib33Demo49Component', () => {
  let component: Lib33Demo49Component;
  let fixture: ComponentFixture<Lib33Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib33Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib33Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
