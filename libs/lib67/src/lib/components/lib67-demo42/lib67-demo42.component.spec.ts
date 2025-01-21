import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo42Component } from './lib67-demo42.component';

describe('Lib67Demo42Component', () => {
  let component: Lib67Demo42Component;
  let fixture: ComponentFixture<Lib67Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
