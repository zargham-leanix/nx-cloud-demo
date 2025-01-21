import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo35Component } from './lib90-demo35.component';

describe('Lib90Demo35Component', () => {
  let component: Lib90Demo35Component;
  let fixture: ComponentFixture<Lib90Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
