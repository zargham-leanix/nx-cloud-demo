import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo13Component } from './lib67-demo13.component';

describe('Lib67Demo13Component', () => {
  let component: Lib67Demo13Component;
  let fixture: ComponentFixture<Lib67Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
