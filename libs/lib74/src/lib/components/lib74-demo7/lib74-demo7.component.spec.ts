import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo7Component } from './lib74-demo7.component';

describe('Lib74Demo7Component', () => {
  let component: Lib74Demo7Component;
  let fixture: ComponentFixture<Lib74Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
