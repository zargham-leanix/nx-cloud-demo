import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo13Component } from './lib90-demo13.component';

describe('Lib90Demo13Component', () => {
  let component: Lib90Demo13Component;
  let fixture: ComponentFixture<Lib90Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
