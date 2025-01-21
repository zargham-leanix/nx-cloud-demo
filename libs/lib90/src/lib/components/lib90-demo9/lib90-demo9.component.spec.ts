import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo9Component } from './lib90-demo9.component';

describe('Lib90Demo9Component', () => {
  let component: Lib90Demo9Component;
  let fixture: ComponentFixture<Lib90Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
