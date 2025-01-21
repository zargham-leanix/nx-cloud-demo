import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo25Component } from './lib90-demo25.component';

describe('Lib90Demo25Component', () => {
  let component: Lib90Demo25Component;
  let fixture: ComponentFixture<Lib90Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
