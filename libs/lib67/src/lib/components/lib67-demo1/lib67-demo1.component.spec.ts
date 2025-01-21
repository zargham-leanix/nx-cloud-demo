import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo1Component } from './lib67-demo1.component';

describe('Lib67Demo1Component', () => {
  let component: Lib67Demo1Component;
  let fixture: ComponentFixture<Lib67Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
