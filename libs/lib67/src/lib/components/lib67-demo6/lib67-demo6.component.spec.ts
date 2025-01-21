import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo6Component } from './lib67-demo6.component';

describe('Lib67Demo6Component', () => {
  let component: Lib67Demo6Component;
  let fixture: ComponentFixture<Lib67Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
