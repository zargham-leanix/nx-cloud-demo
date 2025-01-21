import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo9Component } from './lib67-demo9.component';

describe('Lib67Demo9Component', () => {
  let component: Lib67Demo9Component;
  let fixture: ComponentFixture<Lib67Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
