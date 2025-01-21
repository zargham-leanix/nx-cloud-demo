import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo40Component } from './lib46-demo40.component';

describe('Lib46Demo40Component', () => {
  let component: Lib46Demo40Component;
  let fixture: ComponentFixture<Lib46Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
