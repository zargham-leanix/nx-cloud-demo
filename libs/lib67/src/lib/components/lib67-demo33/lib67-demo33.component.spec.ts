import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo33Component } from './lib67-demo33.component';

describe('Lib67Demo33Component', () => {
  let component: Lib67Demo33Component;
  let fixture: ComponentFixture<Lib67Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
