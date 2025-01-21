import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib93Demo49Component } from './lib93-demo49.component';

describe('Lib93Demo49Component', () => {
  let component: Lib93Demo49Component;
  let fixture: ComponentFixture<Lib93Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib93Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib93Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
