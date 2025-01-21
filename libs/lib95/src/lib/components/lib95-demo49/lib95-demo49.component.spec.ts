import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib95Demo49Component } from './lib95-demo49.component';

describe('Lib95Demo49Component', () => {
  let component: Lib95Demo49Component;
  let fixture: ComponentFixture<Lib95Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib95Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib95Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
