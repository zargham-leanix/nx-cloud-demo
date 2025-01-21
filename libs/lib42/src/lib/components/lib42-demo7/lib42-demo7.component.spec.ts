import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo7Component } from './lib42-demo7.component';

describe('Lib42Demo7Component', () => {
  let component: Lib42Demo7Component;
  let fixture: ComponentFixture<Lib42Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
