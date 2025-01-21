import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo7Component } from './lib24-demo7.component';

describe('Lib24Demo7Component', () => {
  let component: Lib24Demo7Component;
  let fixture: ComponentFixture<Lib24Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
