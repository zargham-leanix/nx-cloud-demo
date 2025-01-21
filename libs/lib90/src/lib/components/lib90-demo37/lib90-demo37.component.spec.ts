import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo37Component } from './lib90-demo37.component';

describe('Lib90Demo37Component', () => {
  let component: Lib90Demo37Component;
  let fixture: ComponentFixture<Lib90Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
