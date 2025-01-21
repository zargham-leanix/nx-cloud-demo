import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo32Component } from './lib67-demo32.component';

describe('Lib67Demo32Component', () => {
  let component: Lib67Demo32Component;
  let fixture: ComponentFixture<Lib67Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
