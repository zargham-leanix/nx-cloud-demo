import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo36Component } from './lib90-demo36.component';

describe('Lib90Demo36Component', () => {
  let component: Lib90Demo36Component;
  let fixture: ComponentFixture<Lib90Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
