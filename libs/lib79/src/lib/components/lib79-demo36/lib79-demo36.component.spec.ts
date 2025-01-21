import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo36Component } from './lib79-demo36.component';

describe('Lib79Demo36Component', () => {
  let component: Lib79Demo36Component;
  let fixture: ComponentFixture<Lib79Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
