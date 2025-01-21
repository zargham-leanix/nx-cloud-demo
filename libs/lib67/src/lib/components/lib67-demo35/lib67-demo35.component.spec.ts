import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo35Component } from './lib67-demo35.component';

describe('Lib67Demo35Component', () => {
  let component: Lib67Demo35Component;
  let fixture: ComponentFixture<Lib67Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
