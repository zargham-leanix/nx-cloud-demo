import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo49Component } from './lib59-demo49.component';

describe('Lib59Demo49Component', () => {
  let component: Lib59Demo49Component;
  let fixture: ComponentFixture<Lib59Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
