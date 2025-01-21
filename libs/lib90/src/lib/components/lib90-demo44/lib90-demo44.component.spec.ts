import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo44Component } from './lib90-demo44.component';

describe('Lib90Demo44Component', () => {
  let component: Lib90Demo44Component;
  let fixture: ComponentFixture<Lib90Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
