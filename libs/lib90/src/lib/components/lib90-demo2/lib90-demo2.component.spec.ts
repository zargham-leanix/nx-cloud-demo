import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo2Component } from './lib90-demo2.component';

describe('Lib90Demo2Component', () => {
  let component: Lib90Demo2Component;
  let fixture: ComponentFixture<Lib90Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
