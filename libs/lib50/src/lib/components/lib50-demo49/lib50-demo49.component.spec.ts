import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo49Component } from './lib50-demo49.component';

describe('Lib50Demo49Component', () => {
  let component: Lib50Demo49Component;
  let fixture: ComponentFixture<Lib50Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
