import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo7Component } from './lib46-demo7.component';

describe('Lib46Demo7Component', () => {
  let component: Lib46Demo7Component;
  let fixture: ComponentFixture<Lib46Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
