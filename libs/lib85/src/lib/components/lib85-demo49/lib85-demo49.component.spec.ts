import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo49Component } from './lib85-demo49.component';

describe('Lib85Demo49Component', () => {
  let component: Lib85Demo49Component;
  let fixture: ComponentFixture<Lib85Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
