import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo7Component } from './lib15-demo7.component';

describe('Lib15Demo7Component', () => {
  let component: Lib15Demo7Component;
  let fixture: ComponentFixture<Lib15Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
