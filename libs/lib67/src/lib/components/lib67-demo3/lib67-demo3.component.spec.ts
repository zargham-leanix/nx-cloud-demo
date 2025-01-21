import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo3Component } from './lib67-demo3.component';

describe('Lib67Demo3Component', () => {
  let component: Lib67Demo3Component;
  let fixture: ComponentFixture<Lib67Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
