import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo49Component } from './lib67-demo49.component';

describe('Lib67Demo49Component', () => {
  let component: Lib67Demo49Component;
  let fixture: ComponentFixture<Lib67Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
