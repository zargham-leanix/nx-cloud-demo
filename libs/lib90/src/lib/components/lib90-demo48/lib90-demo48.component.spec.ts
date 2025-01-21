import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo48Component } from './lib90-demo48.component';

describe('Lib90Demo48Component', () => {
  let component: Lib90Demo48Component;
  let fixture: ComponentFixture<Lib90Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
