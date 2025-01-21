import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo7Component } from './lib31-demo7.component';

describe('Lib31Demo7Component', () => {
  let component: Lib31Demo7Component;
  let fixture: ComponentFixture<Lib31Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
