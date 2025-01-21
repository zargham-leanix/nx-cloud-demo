import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo45Component } from './lib90-demo45.component';

describe('Lib90Demo45Component', () => {
  let component: Lib90Demo45Component;
  let fixture: ComponentFixture<Lib90Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
