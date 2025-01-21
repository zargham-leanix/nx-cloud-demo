import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo7Component } from './lib76-demo7.component';

describe('Lib76Demo7Component', () => {
  let component: Lib76Demo7Component;
  let fixture: ComponentFixture<Lib76Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
