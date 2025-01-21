import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo11Component } from './lib90-demo11.component';

describe('Lib90Demo11Component', () => {
  let component: Lib90Demo11Component;
  let fixture: ComponentFixture<Lib90Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
