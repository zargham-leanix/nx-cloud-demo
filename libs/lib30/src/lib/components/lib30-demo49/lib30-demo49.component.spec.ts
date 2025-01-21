import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib30Demo49Component } from './lib30-demo49.component';

describe('Lib30Demo49Component', () => {
  let component: Lib30Demo49Component;
  let fixture: ComponentFixture<Lib30Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib30Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib30Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
