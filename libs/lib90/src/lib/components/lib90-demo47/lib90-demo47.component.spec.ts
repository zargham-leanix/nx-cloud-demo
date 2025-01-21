import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo47Component } from './lib90-demo47.component';

describe('Lib90Demo47Component', () => {
  let component: Lib90Demo47Component;
  let fixture: ComponentFixture<Lib90Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
