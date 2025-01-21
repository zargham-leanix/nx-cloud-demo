import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo11Component } from './lib67-demo11.component';

describe('Lib67Demo11Component', () => {
  let component: Lib67Demo11Component;
  let fixture: ComponentFixture<Lib67Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
