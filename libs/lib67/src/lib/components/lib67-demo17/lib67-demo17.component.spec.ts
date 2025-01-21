import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo17Component } from './lib67-demo17.component';

describe('Lib67Demo17Component', () => {
  let component: Lib67Demo17Component;
  let fixture: ComponentFixture<Lib67Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
