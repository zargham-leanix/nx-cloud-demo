import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo15Component } from './lib67-demo15.component';

describe('Lib67Demo15Component', () => {
  let component: Lib67Demo15Component;
  let fixture: ComponentFixture<Lib67Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
