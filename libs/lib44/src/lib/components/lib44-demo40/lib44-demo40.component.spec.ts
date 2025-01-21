import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo40Component } from './lib44-demo40.component';

describe('Lib44Demo40Component', () => {
  let component: Lib44Demo40Component;
  let fixture: ComponentFixture<Lib44Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
