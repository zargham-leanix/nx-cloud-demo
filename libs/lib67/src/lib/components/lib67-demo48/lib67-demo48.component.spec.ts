import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo48Component } from './lib67-demo48.component';

describe('Lib67Demo48Component', () => {
  let component: Lib67Demo48Component;
  let fixture: ComponentFixture<Lib67Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
