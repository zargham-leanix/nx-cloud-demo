import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib94Demo7Component } from './lib94-demo7.component';

describe('Lib94Demo7Component', () => {
  let component: Lib94Demo7Component;
  let fixture: ComponentFixture<Lib94Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib94Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib94Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
