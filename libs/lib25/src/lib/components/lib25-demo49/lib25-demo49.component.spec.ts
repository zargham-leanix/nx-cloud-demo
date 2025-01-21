import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo49Component } from './lib25-demo49.component';

describe('Lib25Demo49Component', () => {
  let component: Lib25Demo49Component;
  let fixture: ComponentFixture<Lib25Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
