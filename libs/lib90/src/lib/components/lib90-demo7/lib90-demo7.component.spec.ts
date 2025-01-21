import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo7Component } from './lib90-demo7.component';

describe('Lib90Demo7Component', () => {
  let component: Lib90Demo7Component;
  let fixture: ComponentFixture<Lib90Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
