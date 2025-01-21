import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo0Component } from './lib15-demo0.component';

describe('Lib15Demo0Component', () => {
  let component: Lib15Demo0Component;
  let fixture: ComponentFixture<Lib15Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
