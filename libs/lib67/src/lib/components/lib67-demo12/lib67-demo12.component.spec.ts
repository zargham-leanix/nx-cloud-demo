import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo12Component } from './lib67-demo12.component';

describe('Lib67Demo12Component', () => {
  let component: Lib67Demo12Component;
  let fixture: ComponentFixture<Lib67Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
