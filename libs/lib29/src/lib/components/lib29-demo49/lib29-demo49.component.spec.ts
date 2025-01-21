import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo49Component } from './lib29-demo49.component';

describe('Lib29Demo49Component', () => {
  let component: Lib29Demo49Component;
  let fixture: ComponentFixture<Lib29Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
