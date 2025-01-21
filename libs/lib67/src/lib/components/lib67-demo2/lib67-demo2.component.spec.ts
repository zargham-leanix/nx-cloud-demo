import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo2Component } from './lib67-demo2.component';

describe('Lib67Demo2Component', () => {
  let component: Lib67Demo2Component;
  let fixture: ComponentFixture<Lib67Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
