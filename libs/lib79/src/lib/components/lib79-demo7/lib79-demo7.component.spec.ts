import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo7Component } from './lib79-demo7.component';

describe('Lib79Demo7Component', () => {
  let component: Lib79Demo7Component;
  let fixture: ComponentFixture<Lib79Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
