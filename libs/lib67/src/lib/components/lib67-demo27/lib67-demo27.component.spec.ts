import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib67Demo27Component } from './lib67-demo27.component';

describe('Lib67Demo27Component', () => {
  let component: Lib67Demo27Component;
  let fixture: ComponentFixture<Lib67Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib67Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib67Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
