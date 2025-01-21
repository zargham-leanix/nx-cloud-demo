import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo49Component } from './lib88-demo49.component';

describe('Lib88Demo49Component', () => {
  let component: Lib88Demo49Component;
  let fixture: ComponentFixture<Lib88Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
