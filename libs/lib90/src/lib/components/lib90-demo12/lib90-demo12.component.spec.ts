import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo12Component } from './lib90-demo12.component';

describe('Lib90Demo12Component', () => {
  let component: Lib90Demo12Component;
  let fixture: ComponentFixture<Lib90Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
