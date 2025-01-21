import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo21Component } from './lib15-demo21.component';

describe('Lib15Demo21Component', () => {
  let component: Lib15Demo21Component;
  let fixture: ComponentFixture<Lib15Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
