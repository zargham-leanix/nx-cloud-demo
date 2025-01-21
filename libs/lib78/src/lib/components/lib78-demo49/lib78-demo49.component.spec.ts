import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo49Component } from './lib78-demo49.component';

describe('Lib78Demo49Component', () => {
  let component: Lib78Demo49Component;
  let fixture: ComponentFixture<Lib78Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
