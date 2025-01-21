import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo34Component } from './lib90-demo34.component';

describe('Lib90Demo34Component', () => {
  let component: Lib90Demo34Component;
  let fixture: ComponentFixture<Lib90Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
