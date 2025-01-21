import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo7Component } from './lib44-demo7.component';

describe('Lib44Demo7Component', () => {
  let component: Lib44Demo7Component;
  let fixture: ComponentFixture<Lib44Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
