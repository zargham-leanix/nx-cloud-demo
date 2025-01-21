import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo49Component } from './lib15-demo49.component';

describe('Lib15Demo49Component', () => {
  let component: Lib15Demo49Component;
  let fixture: ComponentFixture<Lib15Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
