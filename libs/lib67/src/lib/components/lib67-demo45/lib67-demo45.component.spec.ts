import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo45Component } from './lib67-demo45.component';

describe('Lib67Demo45Component', () => {
  let component: Lib67Demo45Component;
  let fixture: ComponentFixture<Lib67Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
