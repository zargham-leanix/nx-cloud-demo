import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo7Component } from './lib68-demo7.component';

describe('Lib68Demo7Component', () => {
  let component: Lib68Demo7Component;
  let fixture: ComponentFixture<Lib68Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
