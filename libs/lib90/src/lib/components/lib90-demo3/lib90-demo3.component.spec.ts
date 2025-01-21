import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo3Component } from './lib90-demo3.component';

describe('Lib90Demo3Component', () => {
  let component: Lib90Demo3Component;
  let fixture: ComponentFixture<Lib90Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
