import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo40Component } from './lib29-demo40.component';

describe('Lib29Demo40Component', () => {
  let component: Lib29Demo40Component;
  let fixture: ComponentFixture<Lib29Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
