import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo49Component } from './lib80-demo49.component';

describe('Lib80Demo49Component', () => {
  let component: Lib80Demo49Component;
  let fixture: ComponentFixture<Lib80Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
