import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo7Component } from './lib67-demo7.component';

describe('Lib67Demo7Component', () => {
  let component: Lib67Demo7Component;
  let fixture: ComponentFixture<Lib67Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
