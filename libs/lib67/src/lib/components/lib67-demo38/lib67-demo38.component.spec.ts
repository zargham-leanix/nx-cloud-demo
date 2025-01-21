import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo38Component } from './lib67-demo38.component';

describe('Lib67Demo38Component', () => {
  let component: Lib67Demo38Component;
  let fixture: ComponentFixture<Lib67Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
