import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo7Component } from './lib34-demo7.component';

describe('Lib34Demo7Component', () => {
  let component: Lib34Demo7Component;
  let fixture: ComponentFixture<Lib34Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
