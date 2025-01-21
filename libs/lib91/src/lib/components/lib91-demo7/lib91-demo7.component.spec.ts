import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib91Demo7Component } from './lib91-demo7.component';

describe('Lib91Demo7Component', () => {
  let component: Lib91Demo7Component;
  let fixture: ComponentFixture<Lib91Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib91Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib91Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
