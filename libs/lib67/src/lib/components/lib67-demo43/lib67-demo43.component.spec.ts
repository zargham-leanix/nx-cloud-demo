import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo43Component } from './lib67-demo43.component';

describe('Lib67Demo43Component', () => {
  let component: Lib67Demo43Component;
  let fixture: ComponentFixture<Lib67Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
