import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo40Component } from './lib67-demo40.component';

describe('Lib67Demo40Component', () => {
  let component: Lib67Demo40Component;
  let fixture: ComponentFixture<Lib67Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
