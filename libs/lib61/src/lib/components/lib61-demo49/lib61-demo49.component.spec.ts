import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib61Demo49Component } from './lib61-demo49.component';

describe('Lib61Demo49Component', () => {
  let component: Lib61Demo49Component;
  let fixture: ComponentFixture<Lib61Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib61Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib61Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
