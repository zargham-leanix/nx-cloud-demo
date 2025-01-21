import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo8Component } from './lib90-demo8.component';

describe('Lib90Demo8Component', () => {
  let component: Lib90Demo8Component;
  let fixture: ComponentFixture<Lib90Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
