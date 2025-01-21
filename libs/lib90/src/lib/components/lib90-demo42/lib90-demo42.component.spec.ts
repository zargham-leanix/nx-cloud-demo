import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo42Component } from './lib90-demo42.component';

describe('Lib90Demo42Component', () => {
  let component: Lib90Demo42Component;
  let fixture: ComponentFixture<Lib90Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
