import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib71Demo40Component } from './lib71-demo40.component';

describe('Lib71Demo40Component', () => {
  let component: Lib71Demo40Component;
  let fixture: ComponentFixture<Lib71Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib71Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib71Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
