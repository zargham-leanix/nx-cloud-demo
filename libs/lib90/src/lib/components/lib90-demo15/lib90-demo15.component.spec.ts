import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo15Component } from './lib90-demo15.component';

describe('Lib90Demo15Component', () => {
  let component: Lib90Demo15Component;
  let fixture: ComponentFixture<Lib90Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
