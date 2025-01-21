import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo7Component } from './lib45-demo7.component';

describe('Lib45Demo7Component', () => {
  let component: Lib45Demo7Component;
  let fixture: ComponentFixture<Lib45Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
