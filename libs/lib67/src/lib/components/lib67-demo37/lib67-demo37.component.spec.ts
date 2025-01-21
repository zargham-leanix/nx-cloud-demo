import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo37Component } from './lib67-demo37.component';

describe('Lib67Demo37Component', () => {
  let component: Lib67Demo37Component;
  let fixture: ComponentFixture<Lib67Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
