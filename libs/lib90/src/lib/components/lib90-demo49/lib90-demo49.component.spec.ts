import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo49Component } from './lib90-demo49.component';

describe('Lib90Demo49Component', () => {
  let component: Lib90Demo49Component;
  let fixture: ComponentFixture<Lib90Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
