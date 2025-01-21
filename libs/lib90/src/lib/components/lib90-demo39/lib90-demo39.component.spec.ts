import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo39Component } from './lib90-demo39.component';

describe('Lib90Demo39Component', () => {
  let component: Lib90Demo39Component;
  let fixture: ComponentFixture<Lib90Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
