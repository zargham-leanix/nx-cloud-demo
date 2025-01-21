import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo27Component } from './lib90-demo27.component';

describe('Lib90Demo27Component', () => {
  let component: Lib90Demo27Component;
  let fixture: ComponentFixture<Lib90Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
