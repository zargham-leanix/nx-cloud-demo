import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo26Component } from './lib90-demo26.component';

describe('Lib90Demo26Component', () => {
  let component: Lib90Demo26Component;
  let fixture: ComponentFixture<Lib90Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
