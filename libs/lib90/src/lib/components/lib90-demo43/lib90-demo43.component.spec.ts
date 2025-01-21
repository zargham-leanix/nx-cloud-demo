import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo43Component } from './lib90-demo43.component';

describe('Lib90Demo43Component', () => {
  let component: Lib90Demo43Component;
  let fixture: ComponentFixture<Lib90Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
