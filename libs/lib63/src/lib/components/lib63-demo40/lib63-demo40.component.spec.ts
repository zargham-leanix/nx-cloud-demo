import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo40Component } from './lib63-demo40.component';

describe('Lib63Demo40Component', () => {
  let component: Lib63Demo40Component;
  let fixture: ComponentFixture<Lib63Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
