import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo32Component } from './lib90-demo32.component';

describe('Lib90Demo32Component', () => {
  let component: Lib90Demo32Component;
  let fixture: ComponentFixture<Lib90Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
