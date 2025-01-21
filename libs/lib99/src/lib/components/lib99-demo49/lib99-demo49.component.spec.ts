import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo49Component } from './lib99-demo49.component';

describe('Lib99Demo49Component', () => {
  let component: Lib99Demo49Component;
  let fixture: ComponentFixture<Lib99Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
