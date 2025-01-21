import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo41Component } from './lib90-demo41.component';

describe('Lib90Demo41Component', () => {
  let component: Lib90Demo41Component;
  let fixture: ComponentFixture<Lib90Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
