import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo14Component } from './lib67-demo14.component';

describe('Lib67Demo14Component', () => {
  let component: Lib67Demo14Component;
  let fixture: ComponentFixture<Lib67Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
