import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo29Component } from './lib90-demo29.component';

describe('Lib90Demo29Component', () => {
  let component: Lib90Demo29Component;
  let fixture: ComponentFixture<Lib90Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
