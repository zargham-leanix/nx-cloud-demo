import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo6Component } from './lib90-demo6.component';

describe('Lib90Demo6Component', () => {
  let component: Lib90Demo6Component;
  let fixture: ComponentFixture<Lib90Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
