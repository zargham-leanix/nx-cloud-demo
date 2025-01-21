import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo29Component } from './lib67-demo29.component';

describe('Lib67Demo29Component', () => {
  let component: Lib67Demo29Component;
  let fixture: ComponentFixture<Lib67Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
