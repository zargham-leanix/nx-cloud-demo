import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib90Demo23Component } from './lib90-demo23.component';

describe('Lib90Demo23Component', () => {
  let component: Lib90Demo23Component;
  let fixture: ComponentFixture<Lib90Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib90Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib90Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
