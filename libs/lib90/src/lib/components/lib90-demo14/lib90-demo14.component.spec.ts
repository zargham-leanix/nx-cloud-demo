import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo14Component } from './lib90-demo14.component';

describe('Lib90Demo14Component', () => {
  let component: Lib90Demo14Component;
  let fixture: ComponentFixture<Lib90Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
