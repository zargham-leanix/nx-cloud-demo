import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib23Demo7Component } from './lib23-demo7.component';

describe('Lib23Demo7Component', () => {
  let component: Lib23Demo7Component;
  let fixture: ComponentFixture<Lib23Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib23Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib23Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
