import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib15Demo40Component } from './lib15-demo40.component';

describe('Lib15Demo40Component', () => {
  let component: Lib15Demo40Component;
  let fixture: ComponentFixture<Lib15Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib15Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib15Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
