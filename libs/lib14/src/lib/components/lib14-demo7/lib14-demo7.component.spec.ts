import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib14Demo7Component } from './lib14-demo7.component';

describe('Lib14Demo7Component', () => {
  let component: Lib14Demo7Component;
  let fixture: ComponentFixture<Lib14Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib14Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib14Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
